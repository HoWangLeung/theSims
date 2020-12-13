package com.example.testjpa.service.Order;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.testjpa.model.Payment.ChargeRequest;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

@Service
@Transactional
public class PaymentService {

//    @Value("${STRIPE_SECRET_KEY}")
//    private String secretKey;
//    
    @PostConstruct
    public void init() {
        Stripe.apiKey = "sk_test_VSPqZxwGfLXAyFZcc0HaAK8600zztVGOji";
    }
    public Charge charge(ChargeRequest chargeRequest) 
      throws StripeException  {
        Map<String, Object> chargeParams = new HashMap<>();
        System.out.println("striple amount " +chargeRequest.getAmount());
        System.out.println("striple curr " +chargeRequest.getCurrency());
        System.out.println("striple token " +chargeRequest.getToken());
        
        chargeParams.put("amount", chargeRequest.getAmount());
        chargeParams.put("currency", chargeRequest.getCurrency());
       // chargeParams.put("description", chargeRequest.getDescription());
        chargeParams.put("source", chargeRequest.getToken());
        
        System.out.println("chargeParams = " + chargeParams);
        
        Charge charge = Charge.create(chargeParams);
        System.out.println("charge => " + charge.getInvoice());
        
        return charge;
    }
}