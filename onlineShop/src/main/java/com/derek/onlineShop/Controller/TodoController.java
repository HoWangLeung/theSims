package com.derek.onlineShop.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.derek.onlineShop.Modal.Todo;
import com.derek.onlineShop.Repository.TodoRepository;

@RestController
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepository;

	
	@GetMapping("/jpa/users/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoRepository.findByUsername(username);
		//return todoService.findAll();
	}

	@GetMapping("/jpa/users/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoRepository.findById(id).get();
		//return todoService.findById(id);
	}

	// DELETE /users/{username}/todos/{id}
	@DeleteMapping("/jpa/users/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id) {

		todoRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	

	//Edit/Update a Todo
	//PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("/jpa/users/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo){
		
		todo.setUsername(username);
		
		Todo todoUpdated = todoRepository.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/todos")
	public ResponseEntity<Void> createTodo(
			@PathVariable String username, @RequestBody Todo todo){
		
		todo.setId(-1L);
				
		Todo createdTodo = todoRepository.save(todo);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}