package com.example.testjpa.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.example.testjpa.model.Employee;
import com.example.testjpa.model.experiment.EmployeeExcelExporter;
import com.example.testjpa.repository.EmployeeRepository;
import com.example.testjpa.service.EmployeeService;

import oracle.net.aso.t;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {
	private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeController.class);
	@Autowired
	EmployeeService employeeService;

	@GetMapping("/")
	public ResponseEntity<ApiResponse<List<Employee>>> getAll() {
		List<Employee> employeeList = employeeService.getAll();
	 
		return ResponseEntity.ok(new ApiResponse<List<Employee>>(employeeList));

	}

//	@PostMapping("/")
//	public Boolean addEmployee(@RequestBody Employee emp) {
//
//		return employeeService.addEmployee(emp);
//	}
//
//	@PutMapping("/")
//	public String updateEmployee(@RequestBody Employee emp) {
//
//		return employeeService.updateEmployee(emp);
//	}
//	
	@DeleteMapping("/delete/{id}")
	public void deleteEmployee(@PathVariable("id") long id) {
		System.out.println("DELTE REQUEST !!!!  " + id);
		employeeService.deleteEmployee(id);
		
	}

//	
//	@GetMapping("/page")
//	public Map<String,Object> get(@RequestParam(value="pageno", required=false, defaultValue="0") int pageNo,
//								@RequestParam(value="pagesize",required=false, defaultValue="4") int pageSize,
//								@RequestParam(value="sortBy",required=false, defaultValue="id") String sortBy) {
//		return employeeService.get(pageNo,pageSize,sortBy);
//	}
//	
	@GetMapping("/search")
	public  ResponseEntity<List<Employee>> search(
			@RequestParam(value = "id", required = false) Integer id,
			@RequestParam(value = "name", required = false) String name,
			@RequestParam(value = "department", required = false) String department
			) throws Exception {

		LOGGER.info("**********This is the firstName in controllersssssss: " + name +  ">>>>>>" + id + "department: " + department);

			return ResponseEntity.ok(employeeService.search(name, id,department));		
	}
	
	@GetMapping("/export")
	public void exportToExcel(HttpServletResponse response) throws IOException {
		response.setContentType("application/octet-stream");
		String headerKey = "Content-Disposition";
		DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
		String currentDateTime = dateFormatter.format(new Date());
		String fileName = "Employee_" + currentDateTime + ".xlsx";
		String headerValue = "attachement; filename=" + fileName;		
		response.setHeader(headerKey, headerValue);
		List<Employee> employeeList = employeeService.getAll();
		
		EmployeeExcelExporter excelExporter = new EmployeeExcelExporter(employeeList);
		excelExporter.export(response);
		
		
	}
	
	

}
