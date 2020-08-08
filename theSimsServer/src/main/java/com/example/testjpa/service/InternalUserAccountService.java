package com.example.testjpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.testjpa.model.Users;

public class InternalUserAccountService {
	
	@Autowired
	InternalUserAccountService internalUserAccountService;
	
	public List<Users> findAll(){
		return internalUserAccountService.findAll();
	}

}
