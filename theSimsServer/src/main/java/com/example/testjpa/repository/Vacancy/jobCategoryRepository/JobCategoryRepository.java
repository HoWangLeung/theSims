package com.example.testjpa.repository.Vacancy.jobCategoryRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.testjpa.model.Job.JobCategory;
import com.example.testjpa.model.inventory.Product;

public interface JobCategoryRepository  extends JpaRepository<JobCategory, Long>, JpaSpecificationExecutor<JobCategory> {

	List<JobCategory> findByName(String jobCategory);

}
