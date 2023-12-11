package com.pratyay.CabBookingApplication.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratyay.CabBookingApplication.domain.Cab;
import com.pratyay.CabBookingApplication.domain.Driver;
import com.pratyay.CabBookingApplication.exception.DriverIDException;
import com.pratyay.CabBookingApplication.repository.CabRepository;
import com.pratyay.CabBookingApplication.repository.DriverRepository;
import com.pratyay.CabBookingApplication.service.DriverService;


@Service
public class DriverServiceImpl implements DriverService{
	@Autowired
	private DriverRepository driverRepository; 
	@Autowired
	private CabRepository cabRepository;
	@Override
	public Driver insertDriver(int cabId,Driver driver) {
		
		try {
			Cab cab= cabRepository.getById(cabId);
			if(driver.getDriverId()==0) {
			
					driver.setCab(cab);
					cab.setDriver(driver);
					driverRepository.save(driver);
				}
			else {
				throw new Exception();
			}
			return driver;
		}catch(Exception e) {
			throw new DriverIDException("Driver with id '"+driver.getDriverId()+"' already exists or has been already assigned.");
		}
	
			
	}
	@Override
	public Driver updateDriver(Driver driver) {
		Driver toBeUpdatedDriver= driverRepository.findById(driver.getDriverId());
	
				toBeUpdatedDriver.setDriverId(driver.getDriverId());
				toBeUpdatedDriver.setAddress(driver.getAddress());
				toBeUpdatedDriver.setEmail(driver.getEmail());
				toBeUpdatedDriver.setLicenseNo(driver.getLicenseNo());
				toBeUpdatedDriver.setMobileNumber(driver.getMobileNumber());
				toBeUpdatedDriver.setPassword(driver.getPassword());
				toBeUpdatedDriver.setUsername(driver.getUsername());
				toBeUpdatedDriver.setRating(driver.getRating());
				toBeUpdatedDriver.setCab(driver.getCab());
		
			return driverRepository.save(toBeUpdatedDriver);
		
		
	}
	@Override
	public Driver viewDriver(int driverId) {
		Driver driver= driverRepository.findById(driverId);
		if(driver==null)
		{
			throw new DriverIDException("Driver not found");
		}
		return driver;
	}
	@Override
	public Driver deleteDriver(int driverId) {
		Driver driver= viewDriver(driverId);
		driverRepository.delete(driver);
		return driver;
	}
	@Override
	public List<Driver> viewBestDrivers() {
		List<Driver> allDrivers=new ArrayList<>();
		allDrivers=driverRepository.findAll();
		List<Driver> bestDrivers=allDrivers.stream().filter(d->d.getRating()>4.5).collect(Collectors.toList());
		if(bestDrivers.isEmpty())
		{
			throw new DriverIDException("No driver with rating above 4.5");
		}
		return bestDrivers;
	}
	
	

	
}
