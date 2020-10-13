package com.example.testjpa.controller.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Users;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.service.Order.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping("/")
	public List<Orders> getAll() {
		List<Orders> orderList = orderService.getAll();
	 
		return orderList;

	}
	@PostMapping("/addOrder")
	public void addOrder(@RequestBody Orders order) {
		
		
		orderService.addOrder(order);

	}
	
	
}
