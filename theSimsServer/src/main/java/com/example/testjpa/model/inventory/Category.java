package com.example.testjpa.model.inventory;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.testjpa.model.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="category")
public class Category {
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String category;
	@OneToMany(mappedBy = "category")

	private List<Product> product;
	
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(long id, String category) {
		super();
		this.id = id;
		this.category = category;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public List<Product> getProducts() {
		return product;
	}
	public void setProducts(List<Product> product) {
		this.product = product;
	}
	
	
	
	

}
