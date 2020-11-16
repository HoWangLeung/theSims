package com.example.testjpa.controller.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
		System.out.println("hi");
		List<Orders> orderList = orderService.getAll(); 
	return orderList;
	}
	
	@GetMapping("/{id}")
	public Orders getOrderById(@PathVariable Long id) {
	 
		Orders specificOrder = orderService.getOrderById(id); 
	return specificOrder;
	}
	@PostMapping("/addOrder")
	public void addOrder(@RequestBody Orders order) {
		
		
		orderService.addOrder(order);

	}
	
	
}
