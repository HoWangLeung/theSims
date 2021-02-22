package com.example.testjpa.service.vacancyService;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Job.JobCategory;
import com.example.testjpa.model.Job.Vacancy;
import com.example.testjpa.repository.Vacancy.VacancyRespository;
import com.example.testjpa.repository.Vacancy.jobCategoryRepository.JobCategoryRepository;
@Service
public class VacancyService {
	@Autowired
	VacancyRespository vacancyRespository;
	@Autowired
	JobCategoryRepository jobCategoryRepository;
	
	@Autowired
	EntityManager em;
	public List<Vacancy> getVacancy(String jobTitle, String jobCategory, String jobLevel) {
		// TODO Auto-generated method stub
		 
		List<JobCategory> categories = jobCategoryRepository.findByName(jobCategory);
		 
		Long jobCategoryId =null;
		 if(!categories.isEmpty())  
			  jobCategoryId =  categories.get(0).getId();		
	 
		 
		 System.out.println("category Id = " + jobCategoryId);
	
		
		List<Vacancy> vacancyList = vacancyRespository.findSome(jobTitle,jobCategoryId,jobLevel);
		
	 
		return vacancyList;
	}
	
	
}
