package com.example.testjpa.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.testjpa.model.Order.Orders;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
//implements UserDetails
@Entity
@Table(name="Users")
@NamedEntityGraph(name = "Users.roles", 
attributeNodes = @NamedAttributeNode("roles"))
public class Users  {
	 private static final long serialVersionUID = 5155720064139820502L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "USERNAME", unique=true)
	private String username;
	
	
	@Column(name = "PASSWORD")
	private String password;
	

	@OneToMany(mappedBy = "users")
	@JsonIgnore
	private List<Orders> orders = new ArrayList<>();
	
	
	private boolean enabled;
//	cascade = CascadeType.ALL,
	 @ManyToMany( fetch = FetchType.EAGER)
	    @JoinTable(
	            name = "users_roles",
	            joinColumns = @JoinColumn(name = "user_id", referencedColumnName ="id"),
	            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName ="role_id")
	            )
	private Set<Role> roles = new HashSet<>();
	 
	

	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}


 


	public Users(Long id, String username, String password, List<Orders> orders, boolean enabled, Set<Role> roles) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.orders = orders;
		this.enabled = enabled;
		this.roles = roles;
	}





	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public Set<Role> getRoles() {
		return roles;
	}


	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}




	public List<Orders> getOrders() {
		return orders;
	}



	public void addOrder(Orders order) {
		this.orders.add(order);
	}





	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", password=" + password + ", enabled=" + enabled
				+ ", roles=" + roles + "]";
	}


 

	 



	



	

}
