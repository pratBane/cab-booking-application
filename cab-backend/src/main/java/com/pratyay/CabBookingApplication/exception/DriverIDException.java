package com.pratyay.CabBookingApplication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DriverIDException extends RuntimeException{


	private static final long serialVersionUID = 1L;
	public DriverIDException() {
		super();
	}
	public DriverIDException(String msg) {
		super(msg);
	}
}
