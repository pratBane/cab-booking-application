package com.pratyay.CabBookingApplication.service;

import java.util.List;

import com.pratyay.CabBookingApplication.domain.TripBooking;

public interface ITripBookingService {

	/*
	 * This is for inserting new record in TripBooking Entity
	 */
	TripBooking insertTripBooking(int customerId,int driverId, TripBooking tripBooking);

	/*
	 * This is for updating record in TripBooking Entity
	 */
	TripBooking updateTripBooking(TripBooking tripBooking);

	/*
	 * This is for deleting record in TripBooking Entity
	 */
	TripBooking deleteTripBooking(int tripBookingId);

	/*
	 * This is for getting record from TripBooking Entity by using id
	 */
	TripBooking findTripBookingById(int tripBookingId);

	/*
	 * This is for gettting all record from TripBooking entity
	 */
	Iterable<TripBooking> findAll();

	// List<TripBooking> viewAllTripsCustomer(int customerId);

	// TripBooking calculateBill(int customerId);

}
