package com.example.testjpa.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.testjpa.model.Role;
import com.example.testjpa.model.Users;
@Transactional
public class JwtUserDetails implements UserDetails {
	
	
	private Users users;
	

	public JwtUserDetails(Users users) {
		this.users = users;
	}

 
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		System.out.println("GETTING HERE !!!! in line 27 jwtUSERDTAILS.JAV");
		
		Set<Role> roles = users.getRoles();
		
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		for(Role role:roles) {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		}
		System.out.println("CANNOT GET HERE LINE 33 ");
		System.out.println(authorities.toString());
		
		return authorities;
	}

	 @Override
	    public String getPassword() {
	        return users.getPassword();
	    }
	 
	    @Override
	    public String getUsername() {
	        return users.getUsername();
	    }
	 
	    @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }
	 
	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }
	 
	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }
	 
	    @Override
	    public boolean isEnabled() {
	     
	        return users.isEnabled();
	    }



}


//
//private static final long serialVersionUID = 5155720064139820502L;
//
//  private final Long id;
//  private final String username;
//  private final String password;
//  private final Collection<? extends GrantedAuthority> authorities;
//
//  public JwtUserDetails(Long id, String username, String password, String role) {
//    this.id = id;
//    this.username = username;
//    this.password = password;
//
//    List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
//    authorities.add(new SimpleGrantedAuthority(role));
//
//    this.authorities = authorities;
//  }
//
//  @JsonIgnore
//  public Long getId() {
//    return id;
//  }
//
//  @Override
//  public String getUsername() {
//    return username;
//  }
//
//  @JsonIgnore
//  @Override
//  public boolean isAccountNonExpired() {
//    return true;
//  }
//
//  @JsonIgnore
//  @Override
//  public boolean isAccountNonLocked() {
//    return true;
//  }
//
//  @JsonIgnore
//  @Override
//  public boolean isCredentialsNonExpired() {
//    return true;
//  }
//
//  @JsonIgnore
//  @Override
//  public String getPassword() {
//    return password;
//  }
//
//  @Override
//  public Collection<? extends GrantedAuthority> getAuthorities() {
//    return authorities;
//  }
//
//  @Override
//  public boolean isEnabled() {
//    return true;
//  }
