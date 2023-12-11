package com.pratyay.CabBookingApplication.repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pratyay.CabBookingApplication.domain.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Integer> {
	
	public Driver findById(int driverId);
	
	
	
	
}
