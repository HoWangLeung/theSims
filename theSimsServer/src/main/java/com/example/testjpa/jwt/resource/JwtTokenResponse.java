package com.example.testjpa.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

  private static final long serialVersionUID = 8317676219297719109L;

  private final String token;
  private String username;

    public JwtTokenResponse(String token) {
        this.token = token;
 
    }

    public String getToken() {
        return this.token;
    }

 
}