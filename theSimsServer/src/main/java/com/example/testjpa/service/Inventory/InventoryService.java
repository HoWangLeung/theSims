package com.example.testjpa.service.Inventory;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Employee;
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

				
				@Override
				public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query,
						CriteriaBuilder cb) {
					root.fetch("category", JoinType.INNER);
					return cb.conjunction() ;
	
				}
		    };
		
		
		return inventoryRepository.findAll(spec);
	}
	
}
