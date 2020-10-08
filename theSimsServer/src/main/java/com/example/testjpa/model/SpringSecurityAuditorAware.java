package com.example.testjpa.model;

import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SpringSecurityAuditorAware implements AuditorAware<String> {

	@Override
	public Optional<String> getCurrentAuditor() {
		 SecurityContext securityContext = SecurityContextHolder.getContext();
		 System.out.println(securityContext + "*************************************SECYRUTY");
		 UserDetails userDetail = (UserDetails) securityContext.getAuthentication().getPrincipal();
		 String username = userDetail.getUsername();
		 
	 System.out.println("THIS IS A USERNAME " + username + "*********************************************************************************************************************");
		return Optional.ofNullable(username).filter(s->!s.isEmpty());
	}

}