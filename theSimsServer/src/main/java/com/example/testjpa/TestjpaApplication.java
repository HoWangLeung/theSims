package com.example.testjpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;

import com.example.testjpa.model.SpringSecurityAuditorAware;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

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
