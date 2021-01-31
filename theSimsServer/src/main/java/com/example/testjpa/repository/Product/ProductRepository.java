package com.example.testjpa.repository.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.inventory.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

	@Query("select p from Product p where p.category.name = :category and  p.countryOrigin=:country")
	List<Product> findByCategory(String category, String country);

	
	@Query("SELECT DISTINCT p.countryOrigin FROM Product p")
	List<Object> findDistinctCountryOrigin();
	

	 

 
}
