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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.model.UsersTest.ConfirmationToken;
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
	
	private String firstname;
	private String lastname;
	private String phoneNumber;
	private String addressBuilding;
	private String addressBlock;
	private String addressFloor;
	private String addressFlat;
	
//	cascade = CascadeType.ALL,
	 @ManyToMany( fetch = FetchType.EAGER)
	    @JoinTable(
	            name = "users_roles",
	            joinColumns = @JoinColumn(name = "user_id", referencedColumnName ="id"),
	            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName ="role_id")
	            )
	private Set<Role> roles = new HashSet<>();
	 
	 @OneToOne(mappedBy = "user")
	 private ConfirmationToken confirmationToken;
	 
	 
	

	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}


 
	public Users(Long id, String username, String password, List<Orders> orders, boolean enabled, String firstname,
			String lastname, String phoneNumber, String addressBuilding, String addressBlock, String addressFloor,
			String addressFlat, Set<Role> roles) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.orders = orders;
		this.enabled = enabled;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phoneNumber = phoneNumber;
		this.addressBuilding = addressBuilding;
		this.addressBlock = addressBlock;
		this.addressFloor = addressFloor;
		this.addressFlat = addressFlat;
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

	
	
	
	

	public String getFirstname() {
		return firstname;
	}



	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}



	public String getLastname() {
		return lastname;
	}



	public void setLastname(String lastname) {
		this.lastname = lastname;
	}



	public String getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}



	public String getAddressBuilding() {
		return addressBuilding;
	}



	public void setAddressBuilding(String addressBuilding) {
		this.addressBuilding = addressBuilding;
	}



	public String getAddressBlock() {
		return addressBlock;
	}



	public void setAddressBlock(String addressBlock) {
		this.addressBlock = addressBlock;
	}



	public String getAddressFloor() {
		return addressFloor;
	}



	public void setAddressFloor(String addressFloor) {
		this.addressFloor = addressFloor;
	}



	public String getAddressFlat() {
		return addressFlat;
	}



	public void setAddressFlat(String addressFlat) {
		this.addressFlat = addressFlat;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}



	public ConfirmationToken getConfirmationToken() {
		return confirmationToken;
	}



	public void setConfirmationToken(ConfirmationToken confirmationToken) {
		this.confirmationToken = confirmationToken;
	}



	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", password=" + password + ", enabled=" + enabled
				+ ", roles=" + roles + "]";
	}


 

	 



	



	

}
