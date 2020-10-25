package com.example.testjpa.service.Inventory;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Inventory.CategoryRepository;

@Service
@Transactional
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
 @Autowired
 EntityManager em;
	
	public List<Category> getAll(){

//		 Specification<Category> spec = new Specification<Category>() {
//			private static final long serialVersionUID = 1L;
//
//
//				public Predicate toPredicate(Root<Category> root, CriteriaQuery<?> query,
//						CriteriaBuilder cb) {
//					root.fetch("product", JoinType.INNER).getAttribute();
//					return cb.conjunction();
//				}
//		    };

		
		List<Category> category = categoryRepository.findAll();
	
		return category;
	}



	public void deleteCategoryById(Long id) {
		 
		 Category category = em.find(Category.class, id);
		 System.out.println(category.getName() + " < = name");
		 em.remove(category);
		
	}

}
