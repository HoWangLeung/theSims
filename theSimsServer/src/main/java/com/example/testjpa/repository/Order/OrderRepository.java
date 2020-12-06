package com.example.testjpa.repository.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Order.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Long> {
	
	

	List<Orders> findOrdersByUsersId(@Param("id") Long id);
	

}
