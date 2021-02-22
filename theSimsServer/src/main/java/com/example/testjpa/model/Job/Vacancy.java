package com.example.testjpa.model.Job;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.testjpa.model.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * @author user
 *
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Vacancy extends Auditable<String>  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String jobTitle;
	
	@ManyToOne(cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private JobCategory jobCategory;
	private String jobHighlight1;
	private String jobHighlight2;
	private String jobHighlight3;
	private String jobRequirement1;
	private String jobRequirement2;
	private String jobRequirement3;
	private String jobDescription1;
	private String jobDescription2;
	private String jobDescription3;
	private String yearOfExperience;
	private String jobLevel;
	

	
	public Vacancy() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Vacancy(Long id, String jobTitle, JobCategory jobCategory, String jobHighlight1, String jobHighlight2,
			String jobHighlight3, String jobRequirement1, String jobRequirement2, String jobRequirement3,
			String jobDescription1, String jobDescription2, String jobDescription3, String yearOfExperience,
			String jobLevel) {
		super();
		this.id = id;
		this.jobTitle = jobTitle;
		this.jobCategory = jobCategory;
		this.jobHighlight1 = jobHighlight1;
		this.jobHighlight2 = jobHighlight2;
		this.jobHighlight3 = jobHighlight3;
		this.jobRequirement1 = jobRequirement1;
		this.jobRequirement2 = jobRequirement2;
		this.jobRequirement3 = jobRequirement3;
		this.jobDescription1 = jobDescription1;
		this.jobDescription2 = jobDescription2;
		this.jobDescription3 = jobDescription3;
		this.yearOfExperience = yearOfExperience;
		this.jobLevel = jobLevel;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getJobTitle() {
		return jobTitle;
	}



	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}



	public JobCategory getJobCategory() {
		return jobCategory;
	}



	public void setJobCategory(JobCategory jobCategory) {
		this.jobCategory = jobCategory;
	}



	public String getJobHighlight1() {
		return jobHighlight1;
	}



	public void setJobHighlight1(String jobHighlight1) {
		this.jobHighlight1 = jobHighlight1;
	}



	public String getJobHighlight2() {
		return jobHighlight2;
	}



	public void setJobHighlight2(String jobHighlight2) {
		this.jobHighlight2 = jobHighlight2;
	}



	public String getJobHighlight3() {
		return jobHighlight3;
	}



	public void setJobHighlight3(String jobHighlight3) {
		this.jobHighlight3 = jobHighlight3;
	}



	public String getJobRequirement1() {
		return jobRequirement1;
	}



	public void setJobRequirement1(String jobRequirement1) {
		this.jobRequirement1 = jobRequirement1;
	}



	public String getJobRequirement2() {
		return jobRequirement2;
	}



	public void setJobRequirement2(String jobRequirement2) {
		this.jobRequirement2 = jobRequirement2;
	}



	public String getJobRequirement3() {
		return jobRequirement3;
	}



	public void setJobRequirement3(String jobRequirement3) {
		this.jobRequirement3 = jobRequirement3;
	}



	public String getJobDescription1() {
		return jobDescription1;
	}



	public void setJobDescription1(String jobDescription1) {
		this.jobDescription1 = jobDescription1;
	}



	public String getJobDescription2() {
		return jobDescription2;
	}



	public void setJobDescription2(String jobDescription2) {
		this.jobDescription2 = jobDescription2;
	}



	public String getJobDescription3() {
		return jobDescription3;
	}



	public void setJobDescription3(String jobDescription3) {
		this.jobDescription3 = jobDescription3;
	}



	public String getYearOfExperience() {
		return yearOfExperience;
	}



	public void setYearOfExperience(String yearOfExperience) {
		this.yearOfExperience = yearOfExperience;
	}



	public String getJobLevel() {
		return jobLevel;
	}



	public void setJobLevel(String jobLevel) {
		this.jobLevel = jobLevel;
	}



	@Override
	public String toString() {
		return "Vacancy [id=" + id + ", jobTitle=" + jobTitle + "]";
	}



	 
 
 
	
	
	
	

}
