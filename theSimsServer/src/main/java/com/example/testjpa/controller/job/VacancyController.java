package com.example.testjpa.controller.job;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Job.Vacancy;
import com.example.testjpa.service.vacancyService.VacancyService;

@RestController
@CrossOrigin(origins = "*")
public class VacancyController {
	
	@Autowired
	VacancyService vacancyService;
	
	@GetMapping("/get/vacancy")
	public  ResponseEntity<ApiResponse<List<Vacancy>>>  getAllConfirmedOrders(
			@RequestParam(required=false) String jobTitle,
			@RequestParam(required=false) String jobCategory,
			@RequestParam (required=false)  String jobLevel
			
			) {
		
		System.out.println("getting pararm");
		System.out.println(jobTitle +  " " + jobCategory+ " " + jobLevel);
		
		List<Vacancy> vacancy = vacancyService.getVacancy(jobTitle,jobCategory,jobLevel);
		System.out.println(vacancy);
		return ResponseEntity.ok(new ApiResponse<List<Vacancy>>(vacancy));
	}
	

}
