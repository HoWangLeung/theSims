package com.example.testjpa.selenium.page.googlePage;

import org.springframework.stereotype.Component;

import com.example.testjpa.selenium.Base;
@Component
public class GooglePage extends Base {

	public void goTo() {
		this.driver.get("https://www.google.com");
	}

	@Override
	public boolean isAt() {
		// TODO Auto-generated method stub
		return false;
	}

}
