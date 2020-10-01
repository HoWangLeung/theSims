package com.example.testjpa.service.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Product.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getAllProducts(){


		
		List<Product> productList = productRepository.findAll();
	
		return productList;
	}
}
