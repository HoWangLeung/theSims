package com.example.testjpa.selenium.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.github.bonigarcia.wdm.WebDriverManager;

@Configuration
public class SeleniumConfig {

	@Bean
	public WebDriver chromeDriver() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\user\\Desktop\\Project\\theSims\\selenium\\chrome\\chromedriver.exe");
		return new ChromeDriver();
	}
}
