package com.example.testjpa.service.users;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.UsersTest.ConfirmationToken;
import com.example.testjpa.repository.users.ConfirmationTokenRepository;
@Service
@Transactional
public class ConfirmationTokenService {
	
	@Autowired
	EntityManager em;
	
	@Autowired
	ConfirmationTokenRepository confirmationTokenRepository;
	
	

	public void saveConfirmationToken(ConfirmationToken confirmationToken) {
		System.out.println("before save token = " + confirmationToken.toString());
 
	em.persist(confirmationToken);
	}
	
	public void deleteConfirmationToken(Long id){

		confirmationTokenRepository.deleteById(id);
	}
	
	public boolean confirmUser(String  token) {
		
		ConfirmationToken confirmationToken = confirmationTokenRepository.findByConfirmationToken(token).get(0);

		   Users user = confirmationToken.getUser();
		   
		   System.out.println("enabling user = " + user.toString());

		  user.setEnabled(true);

		  em.persist(user);

		  this.deleteConfirmationToken(confirmationToken.getId());
		  
		  System.out.println("is user enabled "+ user.isEnabled());
		  
		  return user.isEnabled();

		}

}
