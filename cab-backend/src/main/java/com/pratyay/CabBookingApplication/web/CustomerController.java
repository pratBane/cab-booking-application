package com.pratyay.CabBookingApplication.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratyay.CabBookingApplication.domain.Customer;
import com.pratyay.CabBookingApplication.service.ICustomerService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController{
	@Autowired
	private ICustomerService customerService;
	
	@PostMapping("")
	public ResponseEntity<?> createNewCustomer(@RequestBody Customer customer, BindingResult result){
		Customer newCustomer = customerService.insertCustomer(customer);
		return new ResponseEntity<Customer>(newCustomer,HttpStatus.CREATED);
	}
	
	@PutMapping("/{customerId}")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer customer, @PathVariable int customerId){
		Customer existingCustomer =  customerService.viewCustomer(customerId);
		customer.setCustomerId(customerId);
		customerService.updateCustomer(customer);
		return new ResponseEntity<Customer>(HttpStatus.OK);
	}
	
	@GetMapping("/{customerId}")
	public ResponseEntity<?> getCustomerById(@PathVariable int customerId){
		Customer customer = customerService.viewCustomer(customerId);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public Iterable<Customer> getAllCustomers(){
		return customerService.viewCustomers();
	}
	
	@DeleteMapping("/{customerId}")
	public ResponseEntity<?> deleteProject(@PathVariable int customerId){
		customerService.deleteCustomer(customerId);
		return new ResponseEntity<String>("Customer with id : '"+customerId+"' is deleted.",HttpStatus.OK);
	}
	
	public ResponseEntity<?> validateCustomer(String username,String password){
		Customer customer = customerService.validateCustomer(username, password);
		if(customer!=null) {
			return new ResponseEntity<String>("Validation successfull",HttpStatus.OK);
		}
		return new ResponseEntity<String>("Validation not successfull",HttpStatus.BAD_REQUEST); 
	}
}