package com.example.testjpa.repository.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.testjpa.model.Order.OrderBasic;
import com.example.testjpa.model.Order.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long>, JpaSpecificationExecutor<Orders>{

	
	List<OrderBasic> findBy();
}
