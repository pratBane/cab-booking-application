package com.pratyay.CabBookingApplication.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratyay.CabBookingApplication.domain.Customer;
import com.pratyay.CabBookingApplication.domain.Driver;
import com.pratyay.CabBookingApplication.domain.TripBooking;
import com.pratyay.CabBookingApplication.exception.DriverIDException;
import com.pratyay.CabBookingApplication.exception.TripBookingIDException;
import com.pratyay.CabBookingApplication.repository.DriverRepository;
import com.pratyay.CabBookingApplication.repository.ICustomerRepository;
import com.pratyay.CabBookingApplication.repository.ITripBookingRepository;
import com.pratyay.CabBookingApplication.service.ITripBookingService;

@Service
public class ITripBookingServiceImpl implements ITripBookingService {

	@Autowired
	private ITripBookingRepository iTripBookingRepository;

	@Autowired
	private DriverRepository driverRepository;

	@Autowired
	private ICustomerRepository iCustomerRepository;

	/*
	 * Insert new record in the trip_boooking entity
	 */
	@Override
	public TripBooking insertTripBooking(int customerId, int driverId, TripBooking tripBooking) {

		try {
			Customer customer = iCustomerRepository.getById(customerId);
			Driver driver = driverRepository.getById(driverId);

			tripBooking.setCustomer(customer);
			tripBooking.setDriver(driver);

			return iTripBookingRepository.save(tripBooking);
		} catch (Exception e) {
			throw new DriverIDException("Tripbooking with id '" + tripBooking.getTripBookingId()
					+ "' already exists or has been already assigned.");
		}
	}

	/*
	 * update a record in the trip_boooking entity
	 */
	@Override
	public TripBooking updateTripBooking(TripBooking tripBooking) {

		TripBooking toBeUpdatedTripBooking = iTripBookingRepository.getById(tripBooking.getTripBookingId());
		/*
		 * here calculatBill() will be called to calcualte bill
		 * toBeUpdatedTripBooking.setBill(calculateBill(tripBooking.getCustomerId()));
		 */
		toBeUpdatedTripBooking.setDistanceInKm(tripBooking.getDistanceInKm());
		toBeUpdatedTripBooking.setFromDateTime(tripBooking.getFromDateTime());
		toBeUpdatedTripBooking.setToDateTime(tripBooking.getToDateTime());
		toBeUpdatedTripBooking.setFromLocation(tripBooking.getFromLocation());
		toBeUpdatedTripBooking.setStatus(tripBooking.isStatus());
		toBeUpdatedTripBooking.setToLocation(tripBooking.getToLocation());

		return iTripBookingRepository.save(toBeUpdatedTripBooking);
	}

	/*
	 * delete a record in the trip_boooking entity
	 */
	@Override
	public TripBooking deleteTripBooking(int tripBookingId) {
		TripBooking toBeDeletedTripBooking = iTripBookingRepository.findById(tripBookingId).get();
		iTripBookingRepository.delete(toBeDeletedTripBooking);
		if (toBeDeletedTripBooking == null) {
			throw new TripBookingIDException("Trip Booking Id : " + tripBookingId + " does not exists");
		}
		
		
		iTripBookingRepository.delete(toBeDeletedTripBooking);
		return toBeDeletedTripBooking;
	}

	/*
	 * This is for getting record from TripBooking Entity by using id
	 */

	@Override
	public TripBooking findTripBookingById(int tripBookingId) {
		TripBooking tripBooking = iTripBookingRepository.findById(tripBookingId).get();
		// TripBooking tripBooking = iTripBookingRepository.getById(tripBookingId);
		if (tripBooking == null) {
			throw new TripBookingIDException("Trip Booking Id : " + tripBookingId + " does not exists");
		}
		return tripBooking;
	}

	/*
	 * This is for getting all record from TripBooking entity
	 */
	@Override
	public Iterable<TripBooking> findAll() {

		return iTripBookingRepository.findAll();
	}

	/*
	 * @Override public List<TripBooking> viewAllTripsCustomer(int customerId) { //
	 * TODO Auto-generated method stub return null; }
	 * 
	 * @Override public TripBooking calculateBill(int customerId) { // TODO
	 * Auto-generated method stub return null; }
	 */

}
