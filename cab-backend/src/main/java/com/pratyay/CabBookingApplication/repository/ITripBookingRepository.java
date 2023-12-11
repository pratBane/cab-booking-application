package com.pratyay.CabBookingApplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pratyay.CabBookingApplication.domain.TripBooking;

@Repository
public interface ITripBookingRepository extends JpaRepository<TripBooking, Integer> {

	//TripBooking findTripBookingById(int tripBookingId);
	
	// List<TripBooking> viewAllTripsCustomer(int customerId);
	// TripBooking calculateBill(int customerId);
}
