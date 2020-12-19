package com.example.testjpa.jwt;

import java.util.List;
import java.util.Map;

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
	public List<Users> findAllwithRoles() {
		List<Users> users = em.createQuery("select u from Users u join fetch u.roles r").getResultList();
		return users;
	}

 

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		Users users = internalUserAccountRepository.findByUsername(username);

		System.out.println(
				users.getUsername() + "********************************************> JWTUSERDETAILSERVICE.JAVA");
		if (users == null) {
			throw new UsernameNotFoundException("Could not find the user you are asking for");
		}

		return new JwtUserDetails(users);
 
	}

	@Transactional
	public Users getUserProfile(String username) {
		 
		System.out.println("IS EQUAL   " + username.replace("\"", "").equals("derek1"));
		
		Users user = internalUserAccountRepository.findByUsername(username.replace("\"", ""));
		System.out.println(user.getId() + "USER id ===========================================================<");
		return user;
	}

	@Transactional
	public void saveUser(Users internalUserAccount) {
		System.out.println("reaching 95 iin jwtuserdetail service ===> ");
		 em.persist(internalUserAccount);
	}
	
	@Transactional
	public void editUserProfile(Long userId,Users user) {
		System.out.println("reaching 95 iin jwtuserdetail service ====================???????????????=> ");
		Users targetUser = em.find(Users.class, userId);
		targetUser.setFirstname(user.getFirstname());
		targetUser.setLastname(user.getLastname());
		targetUser.setPhoneNumber(user.getPhoneNumber());
		targetUser.setAddressBuilding(user.getAddressBuilding());
		targetUser.setAddressBlock(user.getAddressBlock());
		targetUser.setAddressFlat(user.getAddressFlat());
		targetUser.setAddressFloor(user.getAddressFloor());
		em.merge(targetUser);
	 
 		  
	}
	
	

}
