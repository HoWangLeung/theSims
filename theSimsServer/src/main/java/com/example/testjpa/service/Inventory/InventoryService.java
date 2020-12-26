package com.example.testjpa.service.Inventory;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Inventory.CategoryRepository;
import com.example.testjpa.repository.Inventory.InventoryRepository;
import com.google.common.base.Optional;

@Service
@Transactional
public class InventoryService {
	@Autowired
	InventoryRepository inventoryRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	EntityManager em;
	
	public List<Map<String, Object>> getAll(){

	List<Product> productList = inventoryRepository.getProductWithCateogry();


	List<Map<String, Object>> resultMapList = new ArrayList<Map<String,Object>>();
	System.out.println("productList sizess ==> " + productList.size());
	 for(Product product:productList) {	
		  Map<String, Object> resultMap = new HashMap<String, Object>();
		  resultMap.put("id", product.getId());
		  resultMap.put("productName", product.getProductName());
		  resultMap.put("cost", product.getCost());
		  resultMap.put("country", product.getCountryOrigin());
		  resultMap.put("remaining", product.getRemaining());
		  resultMap.put("productUrl", product.getProductUrl());
		  resultMap.put("category", product.getCategory().getName());
		  DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		  if(product.getLastModifiedDate()!=null) {
			  resultMap.put("lastModifiedDate", product.getLastModifiedDate().format(formatter));
		  }
		  
		  System.out.println(" product.getLastModifiedBy() ===> "+ product.getLastModifiedBy());
		  if(product.getLastModifiedBy()!=null) {
			  resultMap.put("lastModifiedBy", product.getLastModifiedBy());
		  }
		  
		  if(product.getCreatedDate()!=null) {
			  resultMap.put("createdDate", product.getCreatedDate().format(formatter));
		  }
			 
			 
		 
		//  resultMap.put("lastUpdatedDate", product.getLastUpdatedDate().format(formatter));
		  resultMapList.add(resultMap);
	 }
	 	System.out.println(resultMapList);
	
	
		
		return resultMapList;
	}
	
	public List<Map<String, Object>> addProduct(List<Product> products) {
		 products.stream().forEach(product->{
			 Category category = categoryRepository.findByName(product.getCategory().getName());
				System.out.println(category + " <= cat  name");
				if(category!=null) {


					product.setCategory(category);
					em.persist(product);
					 
//					inventoryRepository.save(product);
				
				}else {
					System.out.println("category is null");
					product.setCategory(new Category(product.getCategory().getName(),product.getCategory().getParentCategoryId()));
					em.persist(product);
				}
				
			
		 });
			return this.getAll();	
		
 
 
}

	public List<Map<String, Object>> updateProducts(List<Product> products) {
		
	List<Integer> quantityToUpdate =	products.stream().map(e->e.getRemaining()).collect(Collectors.toList());
	List<Long> idsToUpdate =	products.stream().map(e->e.getId()).collect(Collectors.toList());
	System.out.println("quantityToUpdate " + quantityToUpdate);
	System.out.println("idsToUpdate " + idsToUpdate);
	
	List<Product> productList =  inventoryRepository.getProductWithCateogry()
													.stream()
													.filter(e->idsToUpdate.stream().anyMatch(id-> id==e.getId()))											
													.collect(Collectors.toList());

	for(int i = 0 ;i<productList.size();i++) {	
		productList.get(i).setRemaining(quantityToUpdate.get(i));
	}
 
				
				

		return this.getAll();
	}

	public void delteProductById(Long id) {
		System.out.println("ID ->{}" + id);
	
		Product product = em.find(Product.class, id);
		System.out.println("productName => " + product.getProductName());
		em.remove(product);
		
	}

	public void updateProductById(Long id,Product updatedProduct) {
		Product product = em.find(Product.class, id);
		int newCost = updatedProduct.getCost();
		product.setCost(newCost);
		em.persist(product);
		
		
	}
	
}




