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

		
		Set<Role> roles = users.getRoles();
		
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		for(Role role:roles) {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		}
	

		
		return authorities;
	}
	
	public long getId() {
		return users.getId();
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


