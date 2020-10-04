package com.example.testjpa.service.Order;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Employee;
import com.example.testjpa.model.Order.OrderBasic;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.repository.Order.OrderRepository;

@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepository;

	public List<OrderBasic> getAll() {
 
		
		List<OrderBasic> ordersList = orderRepository.findBy();
		return ordersList;
	}
	
}
