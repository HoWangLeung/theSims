package com.example.testjpa.repository.Inventory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;

@Repository
public interface InventoryRepository extends JpaRepository<Product, Long> {

@Query("SELECT p FROM Product p LEFT JOIN FETCH p.category")
List<Product>getProductWithCateogry();

void save(Category category);

 


	
 

	 

}
