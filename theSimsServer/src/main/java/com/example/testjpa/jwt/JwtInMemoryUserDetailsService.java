package com.example.testjpa.jwt;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Users;
import com.example.testjpa.repository.UsersService;


@Service
@Transactional
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(JwtInMemoryUserDetailsService.class);
	@Autowired
	private UsersService internalUserAccountRepository;
	@Autowired
	EntityManager em;
	@Transactional
	public List<Users> findAllwithRoles(){
		
		
	 
		 List<Users> users = em.createQuery("select u from Users u join fetch u.roles r").getResultList();
		System.out.println(users);

		return users;
							

	}
	
	
//  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

//  static {
//    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
//        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//    inMemoryUserList.add(new JwtUserDetails(1L, "ranga",
//            "$2a$10$33XUQ08dfNis9.6W7dHDOOa8DCswFy.E4sH/b8Wc8DEAqIUZT8K/K", "ROLE_USER_2"));
//    inMemoryUserList.add(new JwtUserDetails(1L, "derek",
//            "$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.", "ROLE_USER_2"));
//    
//  }
  
  


  @Override
 @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	  
	  BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	  
	  Users users = internalUserAccountRepository.findByUsername(username);
 
	  
	  System.out.println(users.getUsername() + "********************************************> JWTUSERDETAILSERVICE.JAVA");
	  if(users == null) {
		  throw new UsernameNotFoundException ("Could not find the user you are asking for");
	  }
	  
	  return new JwtUserDetails(users);
//	  return new User(users.getUsername(), users.getPassword(), new ArrayList<>());
  
//	    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
//           .filter(user -> user.getUsername().equals(username)).findFirst();
//			
//
//    if (!findFirst.isPresent()) {
//      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
//    }
//    
//    System.out.println(findFirst.get().getUsername() +"YOYOYOYOYOYOYOYOYOYOYOYOYYOYO+++++++++>>>>>");
//
//    return findFirst.get();
  }

@Transactional
public Optional<Users> findByUsername(String username) {
	
	System.out.println(username);
	
	Users user = internalUserAccountRepository.findByUsername(username);
	System.out.println(user+"NULL???????????????????????");
	return null;
}


 

@Transactional
public Users saveUser(Users internalUserAccount) {
	return internalUserAccountRepository.save(internalUserAccount);
}



}


