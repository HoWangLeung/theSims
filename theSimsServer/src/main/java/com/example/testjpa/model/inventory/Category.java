package com.example.testjpa.model.inventory;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
@Table(name="category")
@NamedEntityGraph(
		  name = "category-product",
		  attributeNodes = {
		    @NamedAttributeNode(value="product")
		  }
		)
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column(name="name")
	private String name;
	private long parentCategoryId;
	

	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	@JsonBackReference
	 private List<Product> product;
	public Category() {
		super();
		
		// TODO Auto-generated constructor stub
	}
	public Category(long id, String name,long parentCategoryId, List<Product> product) {
		super();
		this.id = id;
		this.name = name;
		this.product = product;
		this.setParentCategoryId(parentCategoryId);
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Product> getProduct() {
		return product;
	}
	public void setProduct(List<Product> product) {
		this.product = product;
	}
	public long getParentCategoryId() {
		return parentCategoryId;
	}
	public void setParentCategoryId(long parentCategoryId) {
		this.parentCategoryId = parentCategoryId;
	}
	 


	
	
	



}
