package com.example.testjpa.repository.Inventory;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.inventory.Category;


 
@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<Category, Long>, JpaSpecificationExecutor<Category> {

	Category findByName(String name);
	
	 

	@Query("SELECT c.name  FROM Category c WHERE c.name!='Food' and c.name!='Fruit'")
	List<Object> findCategory();



}

