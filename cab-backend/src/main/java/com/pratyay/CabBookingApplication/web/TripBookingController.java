package com.pratyay.CabBookingApplication.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratyay.CabBookingApplication.domain.TripBooking;
import com.pratyay.CabBookingApplication.service.ITripBookingService;
import com.pratyay.CabBookingApplication.service.MapValidationErrorService;

@RestController
@RequestMapping("/api/tripbooking")
public class TripBookingController {
	/*
	 * Autowired from service package
	 */
	@Autowired
	private ITripBookingService iTtripBookingService;

	/*
	 * Autowired from service package
	 */
	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	/*
	 * This is function is called to insert new record for TripBooking
	 */
	@PostMapping("/{customerId}/{driverId}")
	public ResponseEntity<?> createNewTripBooking(@Valid @RequestBody TripBooking tripBooking,
			@PathVariable int customerId, @PathVariable int driverId, BindingResult result) {

		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if (errorMap != null)
			return errorMap;

		TripBooking savedTripBooking = iTtripBookingService.insertTripBooking(customerId, driverId, tripBooking);

		return new ResponseEntity<TripBooking>(savedTripBooking, HttpStatus.CREATED);
	}

	/*
	 * this method is called to update record for the given id
	 */
	@PatchMapping("/{tripBookingId}")
	public ResponseEntity<?> updateTripBooking(@Valid @RequestBody TripBooking tripBooking, BindingResult result,
			@PathVariable int tripBookingId) {

		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if (errorMap != null)
			return errorMap;

		tripBooking.setTripBookingId(tripBookingId);
		TripBooking savedTripBooking = iTtripBookingService.updateTripBooking(tripBooking);

		return new ResponseEntity<TripBooking>(savedTripBooking, HttpStatus.OK);
	}

	/*
	 * This method is used to delete record from TripBooking by passing id
	 */
	@DeleteMapping("/{tripBookingId}")
	public ResponseEntity<?> deleteTripBooking(@PathVariable int tripBookingId) {
		TripBooking savedTripBooking = iTtripBookingService.deleteTripBooking(tripBookingId);
		return new ResponseEntity<TripBooking>(savedTripBooking, HttpStatus.OK);
		// return new ResponseEntity<String>("TripBooking with id " + tripBookingId + "
		// is deleted", HttpStatus.OK);
	}

	/*
	 * This method is used to find record from TripBooking by passing id
	 */

	@GetMapping("/{tripBookingId}")
	public ResponseEntity<?> getTripBookingById(@PathVariable int tripBookingId) {
		TripBooking getTripBooking = iTtripBookingService.findTripBookingById(tripBookingId);
		return new ResponseEntity<TripBooking>(getTripBooking, HttpStatus.OK);
	}

	/*
	 * This method is used to find all record from TripBooking
	 */
	@GetMapping("/all")
	public Iterable<TripBooking> getAllProjects() {
		return iTtripBookingService.findAll();
	}

}
