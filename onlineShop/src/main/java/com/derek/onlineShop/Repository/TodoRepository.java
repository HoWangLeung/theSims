package com.derek.onlineShop.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.derek.onlineShop.Modal.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
	List<Todo> findByUsername(String username);
}
 