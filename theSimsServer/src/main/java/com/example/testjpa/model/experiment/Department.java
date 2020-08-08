package com.example.testjpa.model.experiment;

import java.util.List;

import javax.persistence.AttributeOverride;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.testjpa.model.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Department {
	@Id
//	@AttributeOverride(name="id", column=@Column(name="DEPARTMENT_ID"))
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	private String name;
	private String description;
	@OneToMany(mappedBy = "department")
	@JsonIgnore
	private List<Employee> employee;
	
	
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Department(Integer id, String name, String description) {
		super();
		Id = id;
		this.name = name;
		this.description = description;
		
	}


	public Integer getId() {
		return Id;
	}


	public void setId(Integer id) {
		Id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public List<Employee> getEmployee() {
		return employee;
	}


	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}

	

}
