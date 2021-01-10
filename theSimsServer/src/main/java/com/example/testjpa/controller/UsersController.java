package com.example.testjpa.controller;

import java.util.LinkedHashMap;
import java.util.List;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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
import com.example.testjpa.model.UsersTest.ConfirmationToken;
import com.example.testjpa.service.users.ConfirmationTokenService;
import com.example.testjpa.util.EmailSender;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UsersController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);
	@Autowired
	private JwtInMemoryUserDetailsService jwtInMemoryUserDetailsService;
	@Autowired
	ConfirmationTokenService ConfirmationTokenService;
	@Autowired
	EmailSender emailSender;
	

	@GetMapping("/")
	public List<Users> getAllUsers() {
		LOGGER.info("GETREQUEST!!!!!!!!!!!!!!!!********************************************************37");
		List<Users> internalUserAccountList = jwtInMemoryUserDetailsService.findAllwithRoles();

		return internalUserAccountList;
	}

	@GetMapping("/userProfile")
	public ResponseEntity<ApiResponse<LinkedHashMap<String, Object>>> getUserProfile(@RequestParam(value="username") String username) {
		System.out.println("I am in get User profile now" + username);
		Users user = jwtInMemoryUserDetailsService.getUserProfile(username);
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
	public void signupPost(@RequestBody Users user) throws MessagingException {
		System.out.println("^^^^^^^^^^^^#$$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + user);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		user.setPassword(encoder.encode(user.getPassword()));
		user.setEnabled(true);
		
		
		
		jwtInMemoryUserDetailsService.saveUser(user);
//		System.out.println("user name = " + user.getUsername());
//		Users targetUser =jwtInMemoryUserDetailsService.findUser(user.getUsername());
//		System.out.println("user is saved proceed " + targetUser.toString());
//		
//		ConfirmationToken confirmationToken = new ConfirmationToken(targetUser);
//		confirmationToken.setUser(targetUser);
//	
//		ConfirmationTokenService.saveConfirmationToken(confirmationToken);
//		emailSender.sendEmail(targetUser,confirmationToken.getConfirmationToken());
		
	}
	
	
	@GetMapping("/confirm")
	public void signUpConfirm(@RequestParam("token") String token, HttpServletResponse httpServletResponse) {
		
		 HttpHeaders headers = new HttpHeaders();
		    headers.add("Location", "localhost:3000");    
		   
		 
		System.out.println("received the email click");
		if(ConfirmationTokenService.confirmUser(token)) {
			System.out.println("redirect now !!!");
			httpServletResponse.setHeader("Location", "http://localhost:3000/verifySignUPSuccess");
		    httpServletResponse.setStatus(302);

		}else {
			System.out.println("failed");
		}
		
	}
	
	@PutMapping("/editBasicInfo")
	public void editBasicInfo(@RequestParam Long userId, @RequestBody Users req ) {
	 System.out.println("EDIT BASC INFO CONTROLLER");
	 
	 
	 jwtInMemoryUserDetailsService.editUserProfile(userId,req);
	 
	 //return this.getUserProfile(req)
	}
}
