package com.example.testjpa.controller.Inventory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.inventory.Category;
import com.example.testjpa.service.Inventory.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "*")
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/")
	public List<Category> getAll() {
		System.out.println("getting the Category*********************************************");
		List<Category> list = categoryService.getAll(); 
		return list; 
	}

	@DeleteMapping("/deleteCategory/{id}")
	public void deleteCategory(@PathVariable Long id) {
		categoryService.deleteCategoryById(id);
	}
	
	
}
