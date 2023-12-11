package com.pratyay.CabBookingApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pratyay.CabBookingApplication.domain.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

	Customer findByCustomerId(int customerId);
}
