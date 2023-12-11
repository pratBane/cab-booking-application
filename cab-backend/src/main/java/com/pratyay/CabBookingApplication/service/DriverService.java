package com.pratyay.CabBookingApplication.service;

import java.util.List;

import com.pratyay.CabBookingApplication.domain.Driver;

public interface DriverService {

	public Driver insertDriver(int cabId,Driver driver);
	
	public Driver updateDriver(Driver driver);
	
	public Driver viewDriver(int driverId);
	
	public Driver deleteDriver(int driverId);
	
	public List<Driver> viewBestDrivers();
	
	
	
}
