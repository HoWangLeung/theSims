package com.example.testjpa.model.inventory;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.example.testjpa.model.Order.OrderedProductDetail;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String productName;
	private String countryOrigin;
	private int cost;
	private int basePrice;
	private int remaining;

	@ManyToOne(cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
	private Category category;

	@OneToMany( mappedBy = "product")
	private List<OrderedProductDetail> orderedProductDetails;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(Long id, String productName, String countryOrigin, int cost, int basePrice, int remaining,
			Category category, List<OrderedProductDetail> orderedProductDetails) {
		super();
		this.id = id;
		this.productName = productName;
		this.countryOrigin = countryOrigin;
		this.cost = cost;
		this.basePrice = basePrice;
		this.remaining = remaining;
		this.category = category;
		this.orderedProductDetails = orderedProductDetails;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCountryOrigin() {
		return countryOrigin;
	}

	public void setCountryOrigin(String countryOrigin) {
		this.countryOrigin = countryOrigin;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(int basePrice) {
		this.basePrice = basePrice;
	}

	public int getRemaining() {
		return remaining;
	}

	public void setRemaining(int remaining) {
		this.remaining = remaining;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<OrderedProductDetail> getOrderedProductDetails() {
		return orderedProductDetails;
	}

	public void setOrderedProductDetails(List<OrderedProductDetail> orderedProductDetails) {
		this.orderedProductDetails = orderedProductDetails;
	}

 

 
 
	

}
