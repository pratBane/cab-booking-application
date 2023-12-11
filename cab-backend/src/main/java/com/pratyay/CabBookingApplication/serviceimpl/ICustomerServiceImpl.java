package com.pratyay.CabBookingApplication.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratyay.CabBookingApplication.domain.Customer;
import com.pratyay.CabBookingApplication.repository.ICustomerRepository;
import com.pratyay.CabBookingApplication.service.ICustomerService;

@Service
public class ICustomerServiceImpl implements ICustomerService {
	@Autowired
	private ICustomerRepository customerRepository;

	@Override
	public Customer insertCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer deleteCustomer(int customerId) {
		Customer customer = viewCustomer(customerId);
		customerRepository.delete(customer);
		return customer;
	}

	@Override
	public Iterable<Customer> viewCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public Customer viewCustomer(int customerId) {
		Customer customer = customerRepository.findByCustomerId(customerId);
		return customer;
	}

	@Override
	public Customer validateCustomer(String username, String password) {
		Customer customer = new Customer();
		if (username == customer.getUsername() && password == customer.getPassword()) {
			return customer;
		}
		return null;
	}
}
