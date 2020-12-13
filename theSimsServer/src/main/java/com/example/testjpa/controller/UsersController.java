package com.example.testjpa.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.jwt.JwtInMemoryUserDetailsService;
import com.example.testjpa.model.ApiResponse;
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

	@PostMapping("/userProfile")
	public ResponseEntity<ApiResponse<LinkedHashMap<String, Object>>> getUserProfile(@RequestBody Map<String,Object>req) {
		System.out.println("I am in get User profile now");
		Users user = jwtInMemoryUserDetailsService.getUserProfile(req);
		LinkedHashMap<String, Object> resultMap = new LinkedHashMap<String, Object>();
	
		
			  resultMap.put("id", user.getId());
			  resultMap.put("username", user.getUsername());
			  resultMap.put("role", user.getRoles().stream().findFirst().get().getName()); 
			  resultMap.put("addressBuilding", user.getAddressBuilding());
			  resultMap.put("firstname", user.getFirstname());
			  resultMap.put("addressBlock", user.getAddressBlock());
			  resultMap.put("lastname", user.getLastname());
			  resultMap.put("addressFloor", user.getAddressFloor()); 
			  resultMap.put("phoneNumber", user.getPhoneNumber());
			  resultMap.put("addressFlat", user.getAddressFlat());
		
		System.out.println(resultMap);
		return ResponseEntity.ok(new ApiResponse<LinkedHashMap<String, Object>>(resultMap));
	}
 

	@PostMapping("/signup")
	public void signupPost(@RequestBody Users internalUserAccount) {
		System.out.println("^^^^^^^^^^^^#$$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + internalUserAccount);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		internalUserAccount.setPassword(encoder.encode(internalUserAccount.getPassword()));

		jwtInMemoryUserDetailsService.saveUser(internalUserAccount);

	}
	
	@PutMapping("/editBasicInfo")
	public void editBasicInfo(@RequestParam Long userId, @RequestBody Users req ) {
	 System.out.println("EDIT BASC INFO CONTROLLER");
	 
	 
	 jwtInMemoryUserDetailsService.editUserProfile(userId,req);
	 
	 //return this.getUserProfile(req)
	}
}
