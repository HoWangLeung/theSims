package com.example.testjpa.util;
 

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public class ExportPdfUtils {
	
	public static void ExportPdf(HttpServletRequest request, HttpServletResponse response,  PdfPTable title, PdfPTable table ) throws Exception {
        //告诉浏览器用什么软件可以打开此文件
        response.setHeader("content-Type", "application/pdf");
        //下载文件的默认名称
        response.setHeader("Content-Disposition", "attachment;filename=test.pdf");
        //设置中文
//        BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
//        Font FontChinese = new Font(bfChinese, 12, Font.NORMAL);
 
        Document document = new Document();
        PdfWriter.getInstance(document, response.getOutputStream());
        // 打开文档  
        document.open();
        //设置文档标题
        document.addTitle("PDF");
        //设置文档作者  
        document.addAuthor("Derek");
        document.addCreationDate();
        //设置关键字  
        document.addKeywords("iText"); 
   
        //表头
      
        document.add(title);
        String line = "Hello! Welcome to iTextPdf";
        document.add(new Paragraph(line));
 
        
 
        
    
         document.add(table);
      
        document.close();
    }

}
