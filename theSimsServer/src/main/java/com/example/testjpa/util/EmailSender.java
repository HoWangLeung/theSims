package com.example.testjpa.util;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.example.testjpa.model.Users;

@Component
public class EmailSender {
	   @Autowired
	    private JavaMailSender javaMailSender;
	@Autowired
	TemplateEngine templateEngine;
	
	@Autowired
	private Environment env;
	    @Async
	    public void sendEmail(Users user, String token ) throws MessagingException {
	    	
	    	  String link =  env.getProperty("baseUrl")+ "/users/confirm?token="+ token;
	    	   Context context = new Context();
	 	    
	           context.setVariable("link", link);
	           String process = templateEngine.process("SignUpEmail", context);
	           
	           MimeMessage mimeMessage = javaMailSender.createMimeMessage();
	           MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
	           helper.setSubject("Verification Email");
	           helper.setText(process, true);
	           helper.setTo(user.getUsername());
	         
	           
	           
//	        SimpleMailMessage msg = new SimpleMailMessage();
//	        msg.setTo("hkz88i00123@gmail.com");
//	      String url =   "http://localhost:5000/users/confirm?token="+ token;
//	        String content =  
//	                 "<br>Please click the link below to verify your registration:<br>"
//	                + "<h3><a href=\"[["+url+"]]\" target=\"_self\">VERIFY</a></h3>"
//	                + "Thank you,<br>"
//	                + "Your company name.";
//
//	        msg.setSubject("Testing Confirmation Email Spring Boot");
//	        msg.setText("Hello World \n Spring Boot Email");
//	        
//	        msg.setText(content);

	        javaMailSender.send(mimeMessage);

	    }
}
