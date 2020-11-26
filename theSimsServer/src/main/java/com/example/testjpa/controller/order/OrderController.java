package com.example.testjpa.controller.order;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public  Map<String, Object> getOrderById(@PathVariable Long id) { 
		return orderService.getOrderById(id); 	
	}
	
	@GetMapping("user/{id}")
	public  Map<String, Object> getOrderByUserId(@PathVariable Long id) { 
		return orderService.getOrderByUserId(id); 	
	}
	
	
	@PostMapping("/addOrder")
	public Map<String, Object> addOrder(@RequestBody Map<String,Object>req) {
				
		return orderService.addOrder(req);

	}
	
	@DeleteMapping("/removeProduct")
	public Map<String, Object> removeOneProduct(@RequestBody Map<String,Object>req) {
		System.out.println(req.get("userId"));
		return orderService.removeOneProduct(req);
	}
	
	
	@PutMapping("/changeOrderStatus/{id}")
	public  Map<String, Object> proceedToCheckout(@RequestParam(name = "status") String status, @PathVariable Long id) {
		
		System.out.println("status => " + status);
 
		return orderService.changeStatus(id, status);
	}
	
	
	
}
