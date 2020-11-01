package com.example.testjpa.selenium.test.googleTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.testng.annotations.Test;

import com.example.testjpa.selenium.SpringBaseTestNGTest;
import com.example.testjpa.selenium.page.googlePage.GooglePage;

public class GoogleTest extends SpringBaseTestNGTest {
	
	@Autowired
	GooglePage googlePage;

	@Test
	public void firsttest() {
		this.googlePage.goTo();
		
	}
}
