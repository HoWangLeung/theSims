package com.example.testjpa.repository.Order;

import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.Order.OrderedProductDetail;
import com.example.testjpa.model.Order.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Long> {
	 
	
	

}
