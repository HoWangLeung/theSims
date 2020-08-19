package com.example.testjpa.repository.Inventory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Employee;
import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.model.inventory.Product;

@Repository
public interface InventoryRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

	void save(Category category);



 

	 

}
