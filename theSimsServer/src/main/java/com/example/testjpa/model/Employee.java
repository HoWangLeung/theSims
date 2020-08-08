package com.example.testjpa.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.testjpa.model.experiment.Department;

@Entity
@Table(name="employee")
public class Employee {
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column(name = "FIRST_NAME")
	private String firstName;
	@Column(name = "LAST_NAME")
	private String lastName;
	@Column(name = "ROLE")
	private String role;
	@Column(name = "IS_MANAGEMENT")
	private boolean isManagement;
	@Column(name = "ADDRESS")
	private String address;
	
	@ManyToOne(  fetch = FetchType.LAZY)

	
	private Department department;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(long id, String firstName, String lastName, String role, boolean isManagement, String address) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
		this.isManagement = isManagement;
		this.address = address;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isManagement() {
		return isManagement;
	}

	public void setManagement(boolean isManagement) {
		this.isManagement = isManagement;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", role=" + role
				+ ", isManagement=" + isManagement + ", address=" + address + ", department=" + department + "]";
	}

	 

	 
	
	
	

	 
 

}
