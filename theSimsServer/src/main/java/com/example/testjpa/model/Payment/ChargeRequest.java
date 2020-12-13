package com.example.testjpa.model.Payment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class ChargeRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
		public enum Currency {
	       HKD
	    }
	    private String description;
	    private int amount;
	    private Currency currency;
	    private String stripeEmail;
	    private String token;
	    
	    
	    
		public ChargeRequest() {
			super();
			// TODO Auto-generated constructor stub
		}



		public ChargeRequest(Long id, String description, int amount, Currency currency, String stripeEmail,
				String token) {
			super();
			this.id = id;
			this.description = description;
			this.amount = amount;
			this.currency = currency;
			this.stripeEmail = stripeEmail;
			this.token = token;
		}



		public Long getId() {
			return id;
		}



		public void setId(Long id) {
			this.id = id;
		}



		public String getDescription() {
			return description;
		}



		public void setDescription(String description) {
			this.description = description;
		}



		public int getAmount() {
			return amount;
		}



		public void setAmount(int amount) {
			this.amount = amount;
		}



		public Currency getCurrency() {
			return currency;
		}



		public void setCurrency(Currency currency) {
			this.currency = currency;
		}



		public String getStripeEmail() {
			return stripeEmail;
		}



		public void setStripeEmail(String stripeEmail) {
			this.stripeEmail = stripeEmail;
		}



		public String getToken() {
			return token;
		}



		public void setToken(String token) {
			this.token = token;
		}


 
		 
	    
	    
	    
	

}
