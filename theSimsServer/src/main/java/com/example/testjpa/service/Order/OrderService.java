package com.example.testjpa.service.Order;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.repository.Order.OrderRepository;

@Service
@Transactional
public class OrderService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	OrderRepository orderRepository;

	public List<Orders> getAll() {
		List<Orders> ordersList = orderRepository.findAll();
		 
		return ordersList;
	}

	public void addOrder(Orders order) {
		 
		
		orderRepository.save(order);
		
	}

	public Orders getOrderById(Long id) {
		 
		return orderRepository.findById(id).orElse(null);
	}


	
}
