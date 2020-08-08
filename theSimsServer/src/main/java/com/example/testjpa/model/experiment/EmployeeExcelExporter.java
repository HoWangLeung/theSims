package com.example.testjpa.model.experiment;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.example.testjpa.model.Employee;

public class EmployeeExcelExporter {
	
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;
	private List<Employee> employeeList;
	
	public EmployeeExcelExporter(List<Employee> employeeList) {
		this.employeeList = employeeList;
		workbook = new XSSFWorkbook();
		sheet = workbook.createSheet("Employees");

		sheet.setAutoFilter(CellRangeAddress.valueOf("A1:F4"));
		
	}
	
	
	private void writeHeaderRow() {
		Row row = sheet.createRow(0);

		
		CellStyle style = workbook.createCellStyle();
		XSSFFont font =workbook.createFont();
		font.setBold(true);
		font.setFontHeight(12);
		style.setFont(font);



		
		Cell cell = row.createCell(0);
		cell.setCellValue("Employee ID");
		cell.setCellStyle(style);
		
		
		cell = row.createCell(1);
		cell.setCellValue("First Name");
		cell.setCellStyle(style);
		
		cell = row.createCell(2);
		cell.setCellValue("Last Name");
		cell.setCellStyle(style);
		
		cell = row.createCell(3);
		cell.setCellValue("Role");
		cell.setCellStyle(style);
		
		cell = row.createCell(4);
		cell.setCellValue("Department");
		cell.setCellStyle(style);
		
		cell = row.createCell(5);
		cell.setCellValue("Address");
		cell.setCellStyle(style);
		
	
		
	}
	

	
	private void writeDataRows() {
		int rowCount = 1;
		
		CellStyle style = workbook.createCellStyle();
		XSSFFont font =workbook.createFont();
		font.setFontHeight(10);
		style.setFont(font);
		
		for(Employee employee: employeeList) {
			Row row = sheet.createRow(rowCount++);
		
		
			
			Cell cell = row.createCell(0);
			cell.setCellValue(employee.getId());
			sheet.autoSizeColumn(0);
		
			cell.setCellStyle(style);
			
			cell = row.createCell(1);
			cell.setCellValue(employee.getFirstName());
			sheet.autoSizeColumn(1);
			cell.setCellStyle(style);
			
			cell = row.createCell(2);
			cell.setCellValue(employee.getLastName());
			sheet.autoSizeColumn(2);
			cell.setCellStyle(style);
			
			cell = row.createCell(3);
			cell.setCellValue(employee.getRole());
			sheet.autoSizeColumn(3);
			cell.setCellStyle(style);
			
			cell = row.createCell(4);
			cell.setCellValue(employee.getDepartment().getName());
			sheet.autoSizeColumn(4);
			cell.setCellStyle(style);
			
			cell = row.createCell(5);
			cell.setCellValue(employee.getAddress());
			sheet.autoSizeColumn(5);
			cell.setCellStyle(style);
			

		}
		
		
	}
	
	public void export(HttpServletResponse response) throws IOException {
		writeHeaderRow();
		writeDataRows();	
		ServletOutputStream outputStream =response.getOutputStream();
		workbook.write(outputStream);
		workbook.close();
		outputStream.close();
	
	}

}
