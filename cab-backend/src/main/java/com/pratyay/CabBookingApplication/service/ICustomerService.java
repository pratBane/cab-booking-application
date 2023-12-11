package com.pratyay.CabBookingApplication.service;

import com.pratyay.CabBookingApplication.domain.Customer;

public interface ICustomerService {
	public Customer insertCustomer(Customer customer);
	public Customer updateCustomer(Customer customer);
	public Customer deleteCustomer(int customerId);
	public Iterable<Customer> viewCustomers();
	public Customer viewCustomer(int customerId);
	public Customer validateCustomer(String username, String password);
}
