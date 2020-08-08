package com.example.testjpa.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.jwt.JwtInMemoryUserDetailsService;
import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Employee;
import com.example.testjpa.model.Users;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UsersController {
	
private static final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);
@Autowired
private JwtInMemoryUserDetailsService jwtInMemoryUserDetailsService;


	 
	@GetMapping("/")
	public List<Users> getAllUsers() {
		LOGGER.info("GETREQUEST!!!!!!!!!!!!!!!!************************************************************37");
		List<Users> internalUserAccountList = jwtInMemoryUserDetailsService.findAllwithRoles();
 
		return internalUserAccountList;
	}
	
	@GetMapping("/find")
	public Optional<Users> find(@RequestBody  Users internalUserAccount) {
		System.out.println(internalUserAccount.toString());
		Optional<Users> user = jwtInMemoryUserDetailsService.findByUsername(internalUserAccount.getUsername());
 
		return user;
	}
	
//	@GetMapping("/findjwt")
//	public InternalUserAccount findjwt(@RequestBody  InternalUserAccount internalUserAccount) {
//		System.out.println(internalUserAccount.toString());
//		InternalUserAccount user = jwtInMemoryUserDetailsService.loadUserByUsername(internalUserAccount.getUsername());
// 
//		return user;
//	}
	
	
	
	@PostMapping("/signup")
	public void signupPost(@RequestBody  Users internalUserAccount) {
		System.out.println("^^^^^^^^^^^^#$$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + internalUserAccount);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		internalUserAccount.setPassword(encoder.encode(internalUserAccount.getPassword()));
	
		jwtInMemoryUserDetailsService.saveUser(internalUserAccount);
 
		
	}
}
