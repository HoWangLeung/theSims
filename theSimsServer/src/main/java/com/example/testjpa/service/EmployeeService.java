package com.example.testjpa.service;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.FetchType;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.testjpa.model.Employee;
import com.example.testjpa.model.experiment.Department;
import com.example.testjpa.repository.EmployeeRepository;


@Service
public class EmployeeService {
	private static final Logger LOGGER=LoggerFactory.getLogger(EmployeeService.class);
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getAll(){
		
		 Specification<Employee> spec = new Specification<Employee>() {
			private static final long serialVersionUID = 1L;

				@Override
		        public Predicate toPredicate(Root<Employee> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
			 		root.fetch("department", JoinType.INNER);
					return cb.conjunction() ;
		           
		        }
		    };
		


		
		return employeeRepository.findAll(spec);
	}
	
	public void deleteEmployee(long id) {
	   System.out.println("reaching here line 59 service " + id);
	     employeeRepository.deleteById(id);
	
	   
	}


	

	  public  Specification<Employee> withName(String empName) {
		  return (root, query, builder) -> {
			  root.fetch("department", JoinType.INNER);
			 return builder.equal(root.get("firstName"), empName);
		  };
		  	
	  }
	  
	  public  Specification<Employee> withId(Integer id) {
		  return (root, query, builder) -> {
			  root.fetch("department", JoinType.INNER);
			 return builder.equal(root.get("id"), id);
		  };
		  	
	  }
	  
	  public  Specification<Employee> withDept(String department) {
		  return (root, query, builder) -> {
			  root.fetch("department", JoinType.INNER);
			  if(department.equals("All")) {
				  return builder.conjunction();
			  }
			 return builder.equal(root.get("department").get("name"), department);
		  };
		  	
	  }
	  
	  public  Specification<Employee> withNothing() {
		  return (root, query, builder) -> {
			  root.fetch("department", JoinType.INNER);
			 return builder.conjunction();
		  };
		  	
	  }
	
	
	public List<Employee> search(String empName, Integer id, String department) {
		System.out.println(empName + id + department + "<<<<<<<<<<<<<<<<<<<<<<<<");
		if(empName == null && id == null && department == null) {
			 employeeRepository.findAll(withNothing());
		}
		return employeeRepository.findAll(Specification.where
				(empName == null ? null : withName(empName))
			.and(id == null ? null : withId(id))
			.and(department== null ? null :withDept(department))
				
				);
	}
	

	
	
	
	
	
	
	
	

	public List<Employee> searchById(long id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id);
	}

	public List<Employee> findByIdAndFirstname(long id, String name) {
		// TODO Auto-generated method stub
		return employeeRepository.findByIdAndFirstName(id,name);
	}

//	public Optional<Employee> searchByName(String name) {
//		// TODO Auto-generated method stub
//		return employeeRepository.findByName(name);
//	}
	
	
}
