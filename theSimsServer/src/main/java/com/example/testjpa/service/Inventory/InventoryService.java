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
	
	public String addProduct(Product product) {
		System.out.println("get category name -=>" + product.getCategory().getName());
		
		Category category = categoryRepository.findByName(product.getCategory().getName());
		System.out.println(category + " <= cat name");
		if(category!=null) {


			product.setCategory(category);
			em.persist(product);
			 
//			inventoryRepository.save(product);
		
		}else {
			System.out.println("category is null");
			product.setCategory(new Category(product.getCategory().getName(),product.getCategory().getParentCategoryId()));
			em.persist(product);
		}
		
		return "hi";
//		if(product.getCategory().getId()==null) {
//			System.out.println("want to create a new category");
//			String categoryName = product.getCategory().getName();
//			Long categoryParentId = product.getCategory().getParentCategoryId();
//	
//			product.setCategory(new Category(categoryName,categoryParentId));
//
//			em.persist(product);
////			inventoryRepository.save(product);
//		}else {
//			Category category = em.find(Category.class, product.getCategory().getId());
//			System.out.println("want to insert a new product to EXISTING category");
//			product.setCategory(category);
////			category.addProduct(product);
////			em.persist(category);
//			em.persist(product);
//			 
////			inventoryRepository.save(product);
//		}
//
//		
//
//		
//
//		return "saved";
 
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




