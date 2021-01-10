package com.example.testjpa.model.UsersTest;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.example.testjpa.model.Auditable;
import com.example.testjpa.model.Users;
@Entity
public class ConfirmationToken {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String confirmationToken;

	@OneToOne
	 @JoinColumn(name = "users_id")
	private Users user;

	public ConfirmationToken() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ConfirmationToken(Users user) {
		super();
		System.out.println("random id token " + UUID.randomUUID().toString());
		this.id = id;	
		this.user = user;
		this.confirmationToken = UUID.randomUUID().toString();
				
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getConfirmationToken() {
		return confirmationToken;
	}

	public void setConfirmationToken(String confirmationToken) {
		this.confirmationToken = confirmationToken;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}
	
 
	@Override
	public String toString() {
		return "ConfirmationToken [id=" + id + ", confirmationToken=" + confirmationToken + ", user=" + user + "]";
	}

 
	
	
	
	

}
