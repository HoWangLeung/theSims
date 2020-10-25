package com.example.testjpa.repository.Inventory;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.inventory.Category;

@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<Category, Long>, JpaSpecificationExecutor<Category> {

	Category findByName(String name);
	
//	@EntityGraph("category-product")
//	List<Category> findAllproduct();
// 
//	 @Query(value = "Select c,p from Category c  join fetch c.product p")
//	 List<Category> findAllWithProducts();
	



}