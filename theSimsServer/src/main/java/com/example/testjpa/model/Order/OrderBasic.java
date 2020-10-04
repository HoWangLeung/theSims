package com.example.testjpa.model.Order;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.UsersTest.UserBasic;

@CrossOrigin(origins = "*")
public interface OrderBasic {
	 
	  long getId();
	  String getStatus();
	  List<UserBasic> getUsers();
	  List<OrderedProductDetail> getOrderedProductDetail();

	  
	}