//package com.example.testjpa.repository;
//
//import java.sql.ResultSet;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.RowMapper;
//import org.springframework.stereotype.Repository;
//
//import com.example.testjpa.model.Employee;
//
//
//
//
//@Repository
//public interface EmployeeRepository extends JpaRepository<Employee, Integer>  {
//	
//	public List<Employee> findByFirstNameStartingWithOrLastNameStartingWith(String firstName, String lastName);
//
//	public List<Employee> findEmployee(@Param("searchword") String searchword);
//
//}

package com.example.testjpa.repository;

import java.sql.ResultSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Employee;



//
//@Repository
//public class EmployeeRepository {
	
	@Repository
	public interface EmployeeRepository extends JpaRepository<Employee, Long>, JpaSpecificationExecutor<Employee> {
		
		@Transactional
		List<Employee> findByFirstNameContainingIgnoreCase(String name);
		
		@Transactional
		List<Employee> findById(long id);

		@Transactional
		List<Employee> findByIdAndFirstName(long id, String name);
		
//		@Transactional
//		@Query("FROM Employee emp JOIN FETCH emp.department")
//		List<Employee> findAllWithRole();
	}
	
	

