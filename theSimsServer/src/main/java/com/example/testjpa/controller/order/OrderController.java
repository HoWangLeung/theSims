package com.example.testjpa.controller.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Order.OrderBasic;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.service.Order.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping("/")
	public ResponseEntity<ApiResponse<List<OrderBasic>>> getAll() {
		System.out.println("trying to get orders---------------------------------------");
		List<OrderBasic> orderList = orderService.getAll();
	 
		return ResponseEntity.ok(new ApiResponse<List<OrderBasic>>(orderList));

	}
}
