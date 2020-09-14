package com.example.testjpa.service.Inventory;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Employee;
import com.example.testjpa.model.Role;
import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.EmployeeRepository;
import com.example.testjpa.repository.Inventory.InventoryRepository;

@Service
public class InventoryService {
	@Autowired
	InventoryRepository inventoryRepository;
	public List<Product> getAll(){

		 Specification<Product> spec = new Specification<Product>() {
			private static final long serialVersionUID = 1L;


				public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query,
						CriteriaBuilder cb) {
					root.fetch("category", JoinType.INNER);
					return cb.conjunction() ;
	
				}
		    };
		
		
		return inventoryRepository.findAll(spec);
	}
	
	public String addProduct(Product products) {
	
	Category category = new Category();
		category.setId(products.getCategory().getId());
		category.setName(products.getCategory().getName());
	 inventoryRepository.save(category);
		products.setCategory(category);
		
 	
	 inventoryRepository.save(products);
	 return"Saved";
}

	public List<Product> updateProducts(List<Product> products) {
	 
	
		return inventoryRepository.saveAll(products);
	}
	
}




