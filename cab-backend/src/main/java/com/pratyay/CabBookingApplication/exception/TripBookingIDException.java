package com.pratyay.CabBookingApplication.exception;

public class TripBookingIDException extends RuntimeException {

	/**
	 * this is a static variable
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * This will create ProjectIDException object without error message
	 */
	public TripBookingIDException() {
		super();
	}

	/**
	 * This will create ProjectIDException object with error message
	 */
	public TripBookingIDException(String msg) {
		super(msg);
	}

}
