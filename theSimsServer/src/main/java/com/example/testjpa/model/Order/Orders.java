package com.example.testjpa.model.Order;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.inventory.Product;

@Entity
@Table
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String status;
	
 
	@ManyToOne
	private Users users;
	 
	@ManyToMany
	@JoinTable(
			  name = "Orders_Product", 
			  joinColumns = @JoinColumn(name = "order_id"), 
			  inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> productList;


	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Orders(Long id, String status, Users users, Set<Product> productList) {
		super();
		this.id = id;
		this.status = status;
		this.users = users;
		this.productList = productList;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Users getUsers() {
		return users;
	}


	public void setUsers(Users users) {
		this.users = users;
	}


	public Set<Product> getProductList() {
		return productList;
	}


	public void setProductList(Set<Product> productList) {
		this.productList = productList;
	}


	
 

	 

}
