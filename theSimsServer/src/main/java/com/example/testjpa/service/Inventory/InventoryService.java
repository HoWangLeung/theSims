package com.example.testjpa.service.Inventory;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Inventory.CategoryRepository;
import com.example.testjpa.repository.Inventory.InventoryRepository;

@Service
@Transactional
public class InventoryService {
	@Autowired
	InventoryRepository inventoryRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	EntityManager em;
	public List<Product> getAll(){

	List<Product> products = inventoryRepository.getProductWithCateogry();
	 

		
		return products;
	}
	
	public List<Product> addProduct(List<Product> products) {
		 products.stream().forEach(product->{
			 Category category = categoryRepository.findByName(product.getCategory().getName());
				System.out.println(category + " <= cat name");
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

	public List<Product> updateProducts(List<Product> products) {
	 
	
		return inventoryRepository.saveAll(products);
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




