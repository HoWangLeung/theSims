package com.example.testjpa.service.Order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Users;
import com.example.testjpa.model.Order.Orders;
import com.example.testjpa.model.Order.OrdersProduct;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.repository.Order.OrderRepository;

@Service
@Transactional
public class OrderService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	OrderRepository orderRepository;

	@Autowired
	EntityManager em;

	public List<Orders> getAll() {
		List<Orders> ordersList = orderRepository.findAll();

		return ordersList;
	}

	public Map<String, Object> addOrder(Map<String, Object> req) {

		Long userId = ((Integer) req.get("userId")).longValue();
		Users specificUser = em.find(Users.class, userId);

		System.out.println("does the user have order already: => {} " + specificUser.getOrders().size());
		boolean isOrderExist = specificUser.getOrders().size() != 0;
		boolean isPendingOrderExist = !specificUser.getOrders().stream().filter(e->e.getStatus().equals("pending")).collect(Collectors.toList()).isEmpty();
		System.out.println("isPendingOrderExist => "+ isPendingOrderExist);
		if (isPendingOrderExist) {
			System.out.println("Order id already exist, not adding new one, should merge ");
			List<Orders> pendingOrderList = specificUser.getOrders().stream().filter(e->e.getStatus().equals("pending")).collect(Collectors.toList());
			Orders oldOrder = pendingOrderList.stream().findFirst().get();

			Product product = em.find(Product.class, ((Integer) req.get("productId")).longValue());
			Long productId = ((Integer) req.get("productId")).longValue();
			boolean isProductExist = oldOrder.getOrderProductList().stream()
					.anyMatch(e -> e.getProduct().getId().equals(productId));
			System.out.println("isProductExist => " + isProductExist);

			if (isProductExist) {
				System.out.println("producst alread exist, should append to current product");
				int quantity2 = ((Integer) req.get("quantity")).intValue();
				System.out.println("quantity 2 => " + quantity2);
				OrdersProduct oldOrderedProduct = oldOrder.getOrderProductList().stream()
						.filter(e -> e.getProduct().getId().equals(productId)).collect(Collectors.toList()).get(0);

				int newQuantity = oldOrderedProduct.getQuantity() + quantity2;

				System.out.println("newQuantity ==>" + newQuantity);
				oldOrderedProduct.setQuantity(newQuantity);
				
				
				int newSum = 0;
				List<OrdersProduct> oldProductsList = oldOrder.getOrderProductList();
				for (OrdersProduct o : oldProductsList) {
					System.out.println("olddSum" + o.getQuantity() * o.getProduct().getBasePrice());
					newSum += o.getQuantity() * o.getProduct().getBasePrice();
				}
				oldOrder.setTotal(newSum);
				em.persist(oldOrder);

			} else {

				System.out.println("new Products need to be added");
				OrdersProduct osp = new OrdersProduct();
				int quantity1 = ((Integer) req.get("quantity")).intValue();
				osp.setQuantity(quantity1);
				osp.setProduct(product);
				osp.setOrders(oldOrder);
				oldOrder.addProductToList(osp);

				int newSum = 0;

				List<OrdersProduct> oldProductsList = oldOrder.getOrderProductList();

				for (OrdersProduct o : oldProductsList) {

					System.out.println("olddSum" + o.getQuantity() * o.getProduct().getBasePrice());
					newSum += o.getQuantity() * o.getProduct().getBasePrice();
				}

				oldOrder.setTotal(newSum);

				System.out.println("newSum 92  => " + newSum);
				em.persist(oldOrder);
			}

		} else {
			Orders newOrders = new Orders();
			List<OrdersProduct> ordersProductList = new ArrayList<>();
			OrdersProduct newOrdersProduct1 = new OrdersProduct();

			Long productId = ((Integer) req.get("productId")).longValue();
			int quantity1 = ((Integer) req.get("quantity")).intValue();

			newOrdersProduct1.setQuantity(quantity1);
			newOrdersProduct1.setProduct(em.find(Product.class, productId));
			newOrdersProduct1.setOrders(newOrders);

			System.out.println("new Orders Product=>{}" + newOrdersProduct1);
			ordersProductList.add(newOrdersProduct1);

			System.out.println(req.get("status").toString());
			newOrders.setUsers(specificUser);
			newOrders.setStatus(req.get("status").toString());
			newOrders.setOrderProductList(ordersProductList);

			int newSum = newOrdersProduct1.getProduct().getBasePrice() * newOrdersProduct1.getQuantity();
			newOrders.setTotal(newSum);

			System.out.println("newSum 120  => " + newSum);
			em.persist(newOrders);
		}

		Map<String, Object> userOrder = this.getPendingOrderByUserId(userId);

		return userOrder;
	}

	public Map<String, Object> getOrderById(Long id) {

		Orders specificOrder = orderRepository.findById(id).orElse(null);
		System.out.println("get order by id ===> " + specificOrder);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("id", specificOrder.getId());
		resultMap.put("status", specificOrder.getStatus());
		resultMap.put("userName", specificOrder.getUsers().getUsername());
		resultMap.put("orderProductList", specificOrder.getOrderProductList());

		return resultMap;
	}

	public Map<String, Object> getPendingOrderByUserId(Long id) {
		List<Orders> specificOrders = orderRepository.findOrdersByUsersId(id);
		System.out.println("specificOrderss==> " + specificOrders.size() + specificOrders);
		
		
		
		Orders pencdingOrder = specificOrders
								.stream()
								.filter(e->e.getStatus().equals("pending"))
								.findAny()
								.orElse(null);
		
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(pencdingOrder!=null) {
			resultMap.put("id", pencdingOrder.getId());
			resultMap.put("status", pencdingOrder.getStatus());
			resultMap.put("userId", pencdingOrder.getUsers().getId());
			resultMap.put("userName", pencdingOrder.getUsers().getUsername());
			resultMap.put("orderProductList", pencdingOrder.getOrderProductList());
			resultMap.put("total", pencdingOrder.getTotal());
			System.out.println(resultMap);
			
			}
	
	
		return resultMap;
	}

	public Map<String, Object> removeOneProduct(Map<String, Object> req) {

		Long userId = ((Integer) req.get("userId")).longValue();

		Long reqPrdocutId = ((Integer) req.get("productId")).longValue();

		Orders specificOrder = orderRepository.findOrdersByUsersId(userId).stream().filter(e->e.getStatus().equals("pending")).findFirst().get();

		if (specificOrder.getOrderProductList().size() == 1) {
			System.out.println("ONLY ONE PRODUCT REMAINS => size " + specificOrder.getOrderProductList().size());
			specificOrder.getOrderProductList().stream().forEach(e -> System.out.println(e.getProduct().getId()));
			OrdersProduct productToBeRemoved = specificOrder.getOrderProductList().stream()
					.filter(e -> e.getProduct().getId().equals(reqPrdocutId)).findFirst().get();
			System.out.println("GETTING");
			specificOrder.removeProductFromList(productToBeRemoved);
			
			
			em.remove(specificOrder);

			return null;
		} else {
			System.out.println("MORE THEN ONE REMAINS");
			specificOrder.getOrderProductList().stream().forEach(e -> System.out.println(e.getProduct().getId()));
			OrdersProduct productToBeRemoved = specificOrder.getOrderProductList().stream()
					.filter(e -> e.getProduct().getId().equals(reqPrdocutId)).findFirst().get();

			specificOrder.removeProductFromList(productToBeRemoved);
			
			int newSum = 0;

			List<OrdersProduct> oldProductsList = specificOrder.getOrderProductList();

			for (OrdersProduct o : oldProductsList) {

				System.out.println("olddSum" + o.getQuantity() * o.getProduct().getBasePrice());
				newSum += o.getQuantity() * o.getProduct().getBasePrice();
			}

			specificOrder.setTotal(newSum);
			
			
			
			
			
			
			em.merge(specificOrder);
			Map<String, Object> userOrder = this.getPendingOrderByUserId(userId);
			
			
			
			
			
			return userOrder;
		}

	}

	public Map<String, Object> changeStatus(Long id, String status) {

		System.out.println("id ==> " + id);
		Orders targetOrder = em.find(Orders.class, id);
		System.out.println("order = > " + targetOrder.toString());
		targetOrder.setStatus(status);
		em.merge(targetOrder);

		return null;
	}

	public Map<String, Object> getConfirmedrderByUserId(Long id) {
		
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Orders> cq = cb.createQuery(Orders.class);
		Root<Orders> orderRoot = cq.from(Orders.class);


		
		Predicate likeConfirmed = cb.like(orderRoot.get("status"), "%confirmed");
		Predicate equalUserId = cb.equal(orderRoot.get("users").get("id"), id);
		Predicate finalPredicate= cb.and(equalUserId, likeConfirmed);
		cq.where(finalPredicate);
		
		TypedQuery<Orders> query = 
				em.createQuery(cq.select(orderRoot));
		System.out.println("query => " + query);
		List<Orders> result = query.getResultList();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("confirmedOrder",result );
		
		return resultMap;
	}

}
