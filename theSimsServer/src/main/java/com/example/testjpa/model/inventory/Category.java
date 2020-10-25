package com.example.testjpa.model.inventory;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
//@NamedEntityGraph(name = "category-product", attributeNodes = { @NamedAttributeNode(value = "products") })
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	private Long parentCategoryId;
	
	@OneToMany(mappedBy = "category",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private List<Product> products = new ArrayList<>();

	public Category() {
		super();

		// TODO Auto-generated constructor stub
	}



	public Category(String name, Long parentCategoryId ) {
	
		this.name = name;
		this.parentCategoryId = parentCategoryId;
 
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}




	public Long getParentCategoryId() {
		return parentCategoryId;
	}




	public void setParentCategoryId(Long parentCategoryId) {
		this.parentCategoryId = parentCategoryId;
	}



	@JsonIgnore
	public List<Product> getProducts() {
		return products;
	}




	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public void addProduct(Product product) {
		this.products.add(product);
	}


	@Override
	public String toString() {
		return "Category [name=" + name + "]";
	}
	
	

}
