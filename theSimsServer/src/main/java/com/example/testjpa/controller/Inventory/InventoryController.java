package com.example.testjpa.controller.Inventory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.service.Inventory.InventoryService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "*")
public class InventoryController {
	@Autowired
	InventoryService inventoryService;
	
	
	@GetMapping("/")
	public ResponseEntity<ApiResponse< List<Map<String, Object>>>> getAll() {
	
		List<Product> productList = inventoryService.getAll(); 
		List<Map<String, Object>> resultMapList = new ArrayList<Map<String,Object>>();
		 for(Product product:productList) {	
			  Map<String, Object> resultMap = new HashMap<String, Object>();
			  resultMap.put("id", product.getId());
			  resultMap.put("productName", product.getProductName());
			  resultMap.put("country", product.getCountryOrigin());
			  resultMap.put("category", product.getCategory().getName());
			  resultMapList.add(resultMap);
		 }
		 System.out.println(resultMapList);
		 return ResponseEntity.ok(new ApiResponse<List<Map<String, Object>>>(resultMapList));
		 

	}
	
	@PostMapping("/add")
	public List<Product> addProduct(@RequestBody List<Product> product) {
	System.out.println("adding!!!");
	
		inventoryService.addProduct(product);
		
		return inventoryService.addProduct(product);		
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public void delteProductById(@PathVariable Long id) {
		System.out.println("deelteing product!!!" + id);
		inventoryService.delteProductById(id);
		
	}
	
	
	
	@PutMapping("/updateProducts")
	public  ResponseEntity<ApiResponse<List<Product>>>  updateProducts(@RequestBody List<Product> products){
	
		 List<Product> productList = inventoryService.updateProducts(products); 
				  
		 return ResponseEntity.ok(new ApiResponse<List<Product>>(productList));
	}
	
	@PutMapping("/updateProductById/{id}")
	public  void  updateProductById(@PathVariable Long id,@RequestBody Product updatedProduct){
		 
		  inventoryService.updateProductById(id, updatedProduct); 
				  
	
	}
	

}
