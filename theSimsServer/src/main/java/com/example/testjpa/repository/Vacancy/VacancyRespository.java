package com.example.testjpa.repository.Vacancy;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Job.Vacancy;

@Repository
public interface VacancyRespository  extends JpaRepository<Vacancy, Long>, JpaSpecificationExecutor<Vacancy> {

	
	@Query("SELECT v from Vacancy v WHERE (:jobTitle is null or v.jobTitle = :jobTitle) AND (:jobCategoryId is null or v.jobCategory.id = :jobCategoryId) AND (:jobLevel is null or v.jobLevel = :jobLevel) ")
	List<Vacancy> findSome(@Param("jobTitle") String jobTitle, @Param("jobCategoryId") Long jobCategoryId, @Param("jobLevel") String jobLevel);
	

	
	 

}
