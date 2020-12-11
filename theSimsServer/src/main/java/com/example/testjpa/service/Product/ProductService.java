package com.example.testjpa.service.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Product.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	EntityManager em;
	
	public Map<String, Object>getAllProducts(){


		
		List<Product> productList = productRepository.findAll();
		List<String> categories = productList
				.stream()
				.map(e->e.getCategory().getName())
				.distinct()
				.collect(Collectors.toList());
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		resultMap.put("productList", productList);
		resultMap.put("categories", categories);
		resultMap.put("numberOfProducts", productList.size());
		
	
		return resultMap;
	}

	public Product getOneProduct(Long id) {
		
		Product product = em.find(Product.class, id);
	 
		return product;
	}
}
