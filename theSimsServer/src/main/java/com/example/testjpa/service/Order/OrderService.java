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
		List<Orders> ordersList = orderRepository.getAllOrders();
		return ordersList;
	}

	public void addOrder(Orders order) {
		System.out.println("################################################################");
		logger.info(order.getUsers().toString()+ " ##########");
		
		orderRepository.addOrder(order);
		
	}


	
}
