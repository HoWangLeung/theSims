package com.example.testjpa.model;

import org.springframework.http.HttpStatus;
import com.example.testjpa.util.Constants;
 

public class ApiResponse<T> {

	private String code = String.valueOf(HttpStatus.OK.value());
	private String message;
	private T detail;
	public ApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ApiResponse(T detail) {
		super();

		this.message = Constants.SUCCESS;
		this.detail = detail;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getDetail() {
		return detail;
	}
	public void setDetail(T detail) {
		this.detail = detail;
	}
	@Override
	public String toString() {
		return "ApiResponse [code=" + code + ", message=" + message + ", detail=" + detail + "]";
	}
	
	
	
	
	
}
