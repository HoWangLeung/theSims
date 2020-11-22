package com.example.testjpa.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class JWTWebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtUnAuthorizedResponseAuthenticationEntryPoint jwtUnAuthorizedResponseAuthenticationEntryPoint;

    @Autowired
    private UserDetailsService jwtInMemoryUserDetailsService;

    @Autowired
    private JwtTokenAuthorizationOncePerRequestFilter jwtAuthenticationTokenFilter;

    @Value("${jwt.get.token.uri}")
    private String authenticationPath;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .userDetailsService(jwtInMemoryUserDetailsService)
            .passwordEncoder(passwordEncoderBean());
    }
    
    @Bean
    public UserDetailsService userDetailService() {
    	return new JwtInMemoryUserDetailsService();
    }
    
    

    @Bean
    public PasswordEncoder passwordEncoderBean() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
    	
    	DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
    	authProvider.setPasswordEncoder(passwordEncoderBean());
		authProvider.setUserDetailsService(userDetailsService());
    	return authProvider;
    }
    
    
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    
    @Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
//    	   httpSecurity.authorizeRequests()
//       	.anyRequest().authenticated()
//       	.and()
//       	.formLogin().permitAll()
//       	.and()
//       	.logout().permitAll();
    	   
        httpSecurity
            .csrf().disable()
            .exceptionHandling().authenticationEntryPoint(jwtUnAuthorizedResponseAuthenticationEntryPoint).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests()
            .antMatchers("/").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
            .antMatchers("/new").hasAnyAuthority("ADMIN", "CREATOR")
            .antMatchers("/edit/**").hasAnyAuthority("ADMIN", "EDITOR")
            .antMatchers("/employee/1").hasAuthority("ADMIN")
           	.anyRequest().authenticated()
           	.and()
           	.formLogin().permitAll()
           	.and()
           	.logout().permitAll()
//           	.and()
//            .exceptionHandling().accessDeniedPage("/403")
            ;

       httpSecurity
            .addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
        
        httpSecurity
            .headers()
            .frameOptions().sameOrigin()  //H2 Console Needs this setting
            .cacheControl(); //disable caching
        
     
    }

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        webSecurity
            .ignoring()
            .antMatchers(
                HttpMethod.POST,
                authenticationPath
            )
            .antMatchers(HttpMethod.OPTIONS, "/**")
            .and()
            .ignoring()
            .antMatchers(
                HttpMethod.GET,
                "/employee/" //Other Stuff You want to Ignore 
            )
            .and()
            .ignoring()
            .antMatchers(
                HttpMethod.GET,
                "/employee/export",
                "/v2/api-docs",
                "/swagger-resources/**",
                "/swagger-ui.html**",
                "/webjars/**" //Other Stuff You want to Ignore 
            )
            .and()
            .ignoring()
            .antMatchers("/h2-console/**/**")//Should not be in Production!
            .and()
            .ignoring()
            .antMatchers(
        		 HttpMethod.POST,
                 "/users/signup"
        		)
            .and()
            .ignoring()
            .antMatchers(
        		 HttpMethod.GET,
                 "/products/"
        		)
            .and()
            .ignoring()
            .antMatchers(
        		 HttpMethod.GET,
                 "/products/**"
        		)
            
            ;
        
    
        
        
    }
    /////////////Authentication Management by Role///////////

	
    
    
    
}

