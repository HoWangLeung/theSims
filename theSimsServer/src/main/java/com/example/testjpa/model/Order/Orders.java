package com.example.testjpa.model.Order;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.testjpa.model.Auditable;
import com.example.testjpa.model.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
public class Orders extends Auditable<String> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String status;


	@ManyToOne
	@JoinColumn(name = "users_id")
	private Users users;
	
	 
	@OneToMany(mappedBy = "orders", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	 @JsonIgnore
	private List<OrderedProductDetail> orderedProductDetail = new ArrayList<>();


	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Orders(long id, String status, Users users, List<OrderedProductDetail> orderedProductDetail) {
		super();
		this.id = id;
		this.status = status;
		this.users = users;
		this.orderedProductDetail = orderedProductDetail;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
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


	public List<OrderedProductDetail> getOrderedProductDetail() {
		return orderedProductDetail;
	}


	public void setOrderedProductDetail(List<OrderedProductDetail> orderedProductDetail) {
		this.orderedProductDetail = orderedProductDetail;
	}

	 

}
