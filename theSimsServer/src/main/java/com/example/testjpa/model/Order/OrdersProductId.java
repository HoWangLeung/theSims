//package com.example.testjpa.model.Order;
//
//import java.io.Serializable;
//
////@Embeddable
//public class OrdersProductId implements Serializable {
//	
//	 
//	    private Long orders;
//	    private Long product;
//		public Long getOrders() {
//			return orders;
//		}
//		public void setOrders(Long orders) {
//			this.orders = orders;
//		}
//		public Long getProduct() {
//			return product;
//		}
//		public void setProduct(Long product) {
//			this.product = product;
//		}
//		@Override
//		public int hashCode() {
//			final int prime = 31;
//			int result = 1;
//			result = prime * result + ((orders == null) ? 0 : orders.hashCode());
//			result = prime * result + ((product == null) ? 0 : product.hashCode());
//			return result;
//		}
//		@Override
//		public boolean equals(Object obj) {
//			if (this == obj)
//				return true;
//			if (obj == null)
//				return false;
//			if (getClass() != obj.getClass())
//				return false;
//			OrdersProductId other = (OrdersProductId) obj;
//			if (orders == null) {
//				if (other.orders != null)
//					return false;
//			} else if (!orders.equals(other.orders))
//				return false;
//			if (product == null) {
//				if (other.product != null)
//					return false;
//			} else if (!product.equals(other.product))
//				return false;
//			return true;
//		}
//		 
//		 
//		 
//	    
//	    
//
//}
