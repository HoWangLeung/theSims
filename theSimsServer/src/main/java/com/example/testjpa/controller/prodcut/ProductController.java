package com.example.testjpa.controller.prodcut;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.service.Product.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {
	@Autowired
	ProductService productService;

	
	@GetMapping("/")
	public ResponseEntity<ApiResponse<Map<String, Object>>> getAllProducts() {
		
	
	
		Map<String, Object> resultMap = productService.getAllProducts(); 
		return ResponseEntity.ok(new ApiResponse<Map<String, Object>>(resultMap));

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<Product>> getOneProduct(@PathVariable Long id) {
	
	 
		return ResponseEntity.ok(new ApiResponse<Product>(productService.getOneProduct(id)));

	}
	
	
	@GetMapping("/overview")
	public ResponseEntity<ApiResponse<Map<String, Object> >> getOverview() {
	
		
		return ResponseEntity.ok(new ApiResponse<Map<String, Object>>(productService.getOverview()));

	}
	
	@GetMapping("/search")
	public List<Product> filterProduct(@RequestParam(required=false) String category, @RequestParam (required=false)  String country ) {
		//ResponseEntity<ApiResponse<Product>>
		System.out.println("getting pararm");
		System.out.println(country);
		 
		return productService.filterProduct(category,country);
	 
		//return ResponseEntity.ok(new ApiResponse<Product>(productService.filterProduct(category)));

	}
	
	
	
}
