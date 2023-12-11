package com.pratyay.CabBookingApplication.service;

import java.util.List;

import com.pratyay.CabBookingApplication.domain.Cab;

public interface CabService {


	public Cab insertCab(Cab cab);
	
	public Cab updateCab(Cab cab);
	
	public Cab deleteCab(int cabId);
	 
	public List<Cab> viewCabsOfType(String carType);
	
	public int countCabsOfType(String carType);
}
