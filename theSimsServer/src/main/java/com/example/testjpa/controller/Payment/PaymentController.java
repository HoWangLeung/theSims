package com.example.testjpa.controller.Payment;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.Payment.ChargeRequest;
import com.example.testjpa.model.Payment.ChargeRequest.Currency;
import com.example.testjpa.service.Order.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/payment")
public class PaymentController {
	  @Autowired
	  private PaymentService paymentService;
	  
	  
	  @PostMapping("/charge")
	    public Map<String, Object>  charge(@RequestBody ChargeRequest chargeRequest)
	      throws StripeException {
		  System.out.println("incoming chargeRequest  ====>  " + chargeRequest.getAmount());
		  System.out.println("incoming chargeRequests  ====>  " + chargeRequest.getToken());
		  System.out.println("incoming chargeRequessts  ====>  " + chargeRequest.getDescription());
//		  paymentService
		  
		   chargeRequest.setAmount(1000);
		   chargeRequest.setCurrency(Currency.HKD);
		  Charge charge = paymentService.charge(chargeRequest);
	 
		  
//	        chargeRequest.setDescription("Example charge");
	     
//	        Charge charge = stripeService.charge(chargeRequest);
//	        model.addAttribute("id", charge.getId());
//	        model.addAttribute("status", charge.getStatus());
//	        model.addAttribute("chargeId", charge.getId());
//	        model.addAttribute("balance_transaction", charge.getBalanceTransaction());
//	        
//	        System.out.println("model in controller " + model);
		  
		  Map<String, Object> resultMap = new HashMap<>();
		  resultMap.put("chargeId", charge.getId());
		  resultMap.put("paymentStatus", charge.getStatus());
	 
		  
	        return resultMap;
	    }
	  
}
