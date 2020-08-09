package com.example.testjpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.example.testjpa.model.SpringSecurityAuditorAware;

@SpringBootApplication
@EnableJpaAuditing (auditorAwareRef="auditorAware")

public class TestjpaApplication {
	
	 @Bean
	  public AuditorAware<String> auditorAware(){
		return new SpringSecurityAuditorAware();
		 
	 }
	  

	public static void main(String[] args) {
		SpringApplication.run(TestjpaApplication.class, args);
	}
	


}
