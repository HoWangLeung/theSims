package com.example.testjpa.controller.prodcut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<ApiResponse<List<Product>>> getAllProducts() {
	
		List<Product> productList = productService.getAllProducts(); 
		return ResponseEntity.ok(new ApiResponse<List<Product>>(productList));

	}
}
