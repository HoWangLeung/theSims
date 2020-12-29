package com.example.testjpa.controller.order;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.service.Inventory.InventoryService;
import com.example.testjpa.service.Order.OrderService;
import com.itextpdf.awt.geom.Rectangle;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
 
 
@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {
	@Autowired
	OrderService orderService;
	@Autowired
	InventoryService inventoryService;
	
	@Autowired
	EntityManager em;
	@GetMapping("/")
	public List<Orders> getAll() {
		System.out.println("hi");
		List<Orders> orderList = orderService.getAll();
		return orderList;
	}
	
	@GetMapping("/allConfirmedOrders")
	public  ResponseEntity<ApiResponse<List<Orders>>>  getAllConfirmedOrders() {
		
		return ResponseEntity.ok(new ApiResponse<List<Orders>>(orderService.getAllConfirmedOrders()));
	}

	@GetMapping("/{id}")
	public Map<String, Object> getOrderById(@PathVariable Long id) {
		return orderService.getOrderById(id);
	}
	
	
	
	

	@GetMapping("/confirmedOrders")
	public ResponseEntity<ApiResponse<Map<String, Object>>> getConfirmedrderByUserId(@RequestParam Long id) {

		System.out.println("ID = " + id);
		return ResponseEntity.ok(new ApiResponse<Map<String, Object>>(orderService.getConfirmedrderByUserId(id)));
	}

	@GetMapping("user/{id}")
	public Map<String, Object> getPendingOrderByUserId(@PathVariable Long id) {
		return orderService.getPendingOrderByUserId(id);
	}

	@PostMapping("/addOrder")
	public Map<String, Object> addOrder(@RequestBody Map<String, Object> req) {

		return orderService.addOrder(req);

	}
	
 

	@DeleteMapping("/removeProduct")
	public Map<String, Object> removeOneProduct(@RequestBody Map<String, Object> req) {
		System.out.println(req.get("userId"));
		return orderService.removeOneProduct(req);
	}

	@PutMapping("/changeOrderStatus/{id}")
	public Map<String, Object> proceedToCheckout(@RequestParam(name = "status") String status, @PathVariable Long id) {

		System.out.println("status => " + status);
		orderService.changeStatus(id, status);
		inventoryService.changeQuantityAfterPayment(id);

		return null;
	}

	@GetMapping("/confirmedOrders/exportPdf/")
	public void downloadPDF(HttpServletRequest request, HttpServletResponse response, @RequestParam Long userId, @RequestParam Long orderId) throws Exception {
		System.out.println("ID >>>>>>>>>" + userId);
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Orders> cq = cb.createQuery(Orders.class);
		Root<Orders> orderRoot = cq.from(Orders.class);


		
		Predicate likeConfirmed = cb.like(orderRoot.get("status"), "%confirmed");
		Predicate equalUserId = cb.equal(orderRoot.get("users").get("id"), userId);
		Predicate equalOrderId = cb.equal(orderRoot.get("id"), orderId);
		Predicate targetOrder = cb.and(equalUserId, equalOrderId);
		
		
		Predicate finalPredicate= cb.and(targetOrder, likeConfirmed);
		cq.where(finalPredicate);
		
		TypedQuery<Orders> query = 
				em.createQuery(cq.select(orderRoot));
	 
		List<Orders> orderList = query.getResultList();
	
		System.out.println("orderList ===> " + orderList);
		
		Orders specificOrder = orderList.get(0);
		
		
		// 告诉浏览器用什么软件可以打开此文件
		response.setHeader("content-Type", "application/pdf");
		// 下载文件的默认名称
		response.setHeader("Content-Disposition", "attachment;filename=invoice.pdf");
		// 设置中文
//	        BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
//	        Font FontChinese = new Font(bfChinese, 12, Font.NORMAL);

		Document document = new Document();
		PdfWriter.getInstance(document, response.getOutputStream());
		// 打开文档
		document.open();
		// 设置文档标题
		document.addTitle("PDF");
		// 设置文档作者
		document.addAuthor("Derek");
		document.addCreationDate();
		// 设置关键字
		document.addKeywords("iText");

		// 表头

		
     Font fontHeading = new Font(Font.FontFamily.TIMES_ROMAN,18,Font.BOLD);
     fontHeading.setColor(new BaseColor(119, 119, 119));
     
     Font fontTableHeader =new Font(Font.FontFamily.TIMES_ROMAN,10,Font.BOLD);
     Font fontNormal =new Font(Font.FontFamily.TIMES_ROMAN,11,Font.NORMAL);
		Paragraph header = new Paragraph("INVOICE", fontHeading);
		
		document.add(header);
	 
		LineSeparator ls = new LineSeparator();
		document.add(new Chunk(ls));
		   PdfPCell cell;
		
		PdfPTable title = new PdfPTable(4);
		
		 
		List<String> titles = Arrays.asList("Product Name","Price (HKD)", "Quantity","Amount (HKD)");
		   for(int i = 0; i < 4; i++){
	            cell = new PdfPCell(new Phrase(titles.get(i), fontTableHeader));
	            cell.setBackgroundColor(new BaseColor(250, 250, 250));
	            cell.setBorder(Rectangle.OUT_BOTTOM);
	            cell.setBorder(Rectangle.OUT_LEFT);
	            cell.setBorder(Rectangle.OUT_RIGHT);
	            cell.setBorder(Rectangle.OUT_TOP);
	        
	            cell.setBorderColor(new BaseColor(240, 240, 240));
	            cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
	            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
	            cell.setFixedHeight(35);
	            title.addCell(cell);
	        }
	 

		PdfPTable table = new PdfPTable(4);
		
	 
	
		table.getDefaultCell().setBorderColor(new BaseColor(240, 240, 240));
		table.getDefaultCell().setBorder(Rectangle.OUT_BOTTOM);
		table.getDefaultCell().setBorder(Rectangle.OUT_TOP);
		table.getDefaultCell().setVerticalAlignment(Element.ALIGN_MIDDLE);
		table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_CENTER);
		table.getDefaultCell().setPadding(10);
	 
		
		specificOrder.getOrderProductList().stream().forEach(e->{
			System.out.println("NAME = "+ e.getProduct().getProductName().toString());
			
			table.addCell(new Phrase(e.getProduct().getProductName(), fontNormal));
			table.addCell( new Phrase(Integer.toString(e.getProduct().getBasePrice()), fontNormal));
			table.addCell( new Phrase(Integer.toString(e.getQuantity()), fontNormal));
			table.addCell( new Phrase(Integer.toString(e.getQuantity()*  e.getProduct().getBasePrice()), fontNormal));
	 
		});
		

	 
		
 
		document.add(title);
	

		document.add(table);
		
		
		document.add(new Chunk(ls));
		
		
		
		
		PdfPTable calTable = new PdfPTable(1);
		
		
		calTable.getDefaultCell().setBorderColor(new BaseColor(255, 255, 255));
//		calTable.getDefaultCell().setBorder(Rectangle.OUT_BOTTOM);
		//calTable.getDefaultCell().setBorder(Rectangle.OUT_TOP);
		calTable.getDefaultCell().setVerticalAlignment(Element.ALIGN_MIDDLE);
		calTable.getDefaultCell().setHorizontalAlignment(Element.ALIGN_LEFT);
		calTable.getDefaultCell().setPadding(5);
		
		 
		calTable.addCell(new Phrase(String.format("Subtotal:  $ %d ", specificOrder.getTotal()), fontNormal));
		calTable.addCell(new Phrase("Discount: $ 0", fontNormal));
		calTable.addCell(new Phrase(String.format("Total:       $ %d ", specificOrder.getTotal()), fontNormal));
 
		calTable.setHorizontalAlignment(Element.ALIGN_RIGHT);
		float[] columnWidths = new float[]{1f};
		 calTable.setWidthPercentage(18);
	document.add(calTable);
		document.close();

		
	}

}
