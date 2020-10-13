package com.example.testjpa.repository.Order;

import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.Order.Orders;

@Repository
public class OrderRepository {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	EntityManager em;
	public List<Orders> getAllOrders() {
		
		Query query = em.createQuery("SELECT o FROM Orders o ");
		List<Orders> orderList= query.getResultList();
		return orderList;
	}
	


	public void addOrder(Orders order) {
	
		Users user = order.getUsers();
		order.setUsers(user);
		user.addOrder(order);
		em.persist(order);
		
	}
	

}
