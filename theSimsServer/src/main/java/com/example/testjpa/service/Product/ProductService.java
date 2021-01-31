package com.example.testjpa.service.Product;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Inventory.CategoryRepository;
import com.example.testjpa.repository.Product.ProductRepository;



@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	
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

	public List<Product> filterProduct(String category, String countries) {
		
		
		String[] countryArray = countries.contains(",")? countries.split(","):countries.split(" ");
		
		  List<String> countryList = Arrays.asList(countryArray);
//		if(category == null && country == null ) {
//			List<Product> noFilter = productRepository.findAll(withNothing());
//			noFilter.stream().forEach(e->{System.out.println(e.getProductName());});
//			
//		}

		return productRepository.findAll(Specification.where
				(category == null ? null : withCategory(category))
			//.and(id == null ? null : withId(id))
			.and(withCountry(countryList))
				
				);
		
	 
		
	}

	 

	private Specification<Product> withCategory(String category) {
		 return (root, query, builder) -> {
			  root.fetch("category", JoinType.INNER);
		  if(category.equals("All")) {
				  return builder.conjunction();
			  }
			 return builder.equal(root.get("category").get("name"), category);
		  };
	}

	private Specification<Product> withCountry( List<String> countryList) {
		System.out.println(countryList + "<<<<<<<<<<<<<<<<<<<<<<<<");
		 return (root, query, builder) -> {
			  root.fetch("category", JoinType.INNER);
		  if(countryList.get(0).equals("All")) {
				  return builder.conjunction();
			  }
		  
		  Expression<String> exp = root.get("countryOrigin");
		  Predicate predicate = exp.in(countryList);
		  
			 return predicate;
		  };
	}

	public  Specification<Product> withNothing() {
		  return (root, query, builder) -> {
			  root.fetch("category", JoinType.INNER);
			 return builder.conjunction();
		  };
		  	
	  }

	public Map<String, Object>  getOverview() {
		// TODO Auto-generated method stub
		Map<String, Object> resultMap = new HashMap<String, Object>();
		List<Object> countries = productRepository.findDistinctCountryOrigin();
		List<Object> categories = categoryRepository.findCategory();
		countries.add(0,"All");
		categories.add(0,"All");
	 System.out.println(categories.toString());
		
		resultMap.put("countries", countries);
		resultMap.put("categories", categories);
		
		
		return resultMap;
	}
}
