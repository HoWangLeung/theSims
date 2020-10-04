package com.example.testjpa.model.Order;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
public class OrderedProductDetail {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private int OrderedProductId;
	private String OrderedProductName;
	private int OrderedProductPrice;
	
	@ManyToOne
	@JoinColumn(name="ORDERS_ID", nullable=false)
	  @JsonIgnore
    private Orders orders;
	
	public OrderedProductDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderedProductDetail(long id, int orderedProductId, String orderedProductName, int orderedProductPrice,
			Orders orders) {
		super();
		this.id = id;
		OrderedProductId = orderedProductId;
		OrderedProductName = orderedProductName;
		OrderedProductPrice = orderedProductPrice;
		this.orders = orders;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getOrderedProductId() {
		return OrderedProductId;
	}

	public void setOrderedProductId(int orderedProductId) {
		OrderedProductId = orderedProductId;
	}

	public String getOrderedProductName() {
		return OrderedProductName;
	}

	public void setOrderedProductName(String orderedProductName) {
		OrderedProductName = orderedProductName;
	}

	public int getOrderedProductPrice() {
		return OrderedProductPrice;
	}

	public void setOrderedProductPrice(int orderedProductPrice) {
		OrderedProductPrice = orderedProductPrice;
	}

	public Orders getOrders() {
		return orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}

 
	 
	
	
	

}
