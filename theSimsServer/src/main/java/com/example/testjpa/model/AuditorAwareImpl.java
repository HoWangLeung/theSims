package com.example.testjpa.model;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
    	
    	System.out.println("GETTING HERE AUDITOR");
    	Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
    	String username = loggedInUser.getName();
    	
   
    	
        return Optional.of(username);
        // Can use Spring Security to return currently logged in user
        // return ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()
    }
}