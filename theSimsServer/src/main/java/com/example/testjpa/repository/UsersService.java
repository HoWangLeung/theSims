package com.example.testjpa.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Users;

@Repository
@Transactional
public interface UsersService extends JpaRepository<Users, Long> {


 
//@Query("select u from Users u join fetch u.roles r")
// List<Users> findAllwithRoles();	

 Users findByUsername(String username);
	
	


}

