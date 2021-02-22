package com.example.testjpa.model.Job;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class JobCategory {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private Long parentCategoryId;
	
	@OneToMany(mappedBy = "jobCategory",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	@JsonIgnore
	private List<Vacancy> vacancy = new ArrayList<>();
	
	

	public JobCategory() {
		super();
		// TODO Auto-generated constructor stub
	}



	public JobCategory(Long id, String name, Long parentCategoryId ) {
		super();
		this.id = id;
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



	public List<Vacancy> getVacancy() {
		return vacancy;
	}



	public void setVacancy(List<Vacancy> vacancy) {
		this.vacancy = vacancy;
	}
	
	
	
	
}
