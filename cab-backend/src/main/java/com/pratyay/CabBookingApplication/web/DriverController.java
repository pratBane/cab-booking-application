package com.pratyay.CabBookingApplication.web;

import java.util.List;
import java.util.function.Supplier;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratyay.CabBookingApplication.domain.Driver;
import com.pratyay.CabBookingApplication.service.DriverService;
import com.pratyay.CabBookingApplication.service.MapValidationErrorService;


@RestController
@RequestMapping("/api/drivers")
public class DriverController {
	@Autowired
	private DriverService driverService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	@PostMapping("/{cabId}")
	public ResponseEntity<?> addDriver(@Valid @RequestBody Driver driver,@PathVariable int cabId,BindingResult result){
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null) 
			return errorMap;

		Driver savedDriver=driverService.insertDriver(cabId,driver);
		return new ResponseEntity<Driver>(savedDriver,HttpStatus.CREATED);
		
	}
	@PatchMapping("/{driverId}")
	public ResponseEntity<?> updateDriver(@Valid @RequestBody Driver driver,@PathVariable int driverId,BindingResult result){
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null) 
			return errorMap;
		driver.setDriverId(driverId);
		Driver updatedDriver=driverService.updateDriver(driver);
		return new ResponseEntity<Driver>(updatedDriver,HttpStatus.OK);
	}
	@GetMapping("/{driverId}")
	public ResponseEntity<?> viewDriverById(@PathVariable int driverId){
		Driver driver=driverService.viewDriver(driverId);
		return new ResponseEntity<Driver>(driver,HttpStatus.OK);
	}
	@DeleteMapping("/{driverId}")
	public ResponseEntity<?> deleteDriverById(@PathVariable int driverId){
		driverService.deleteDriver(driverId);
		return new ResponseEntity<String>("Driver with id '"+driverId+"' has been deleted successfully.",HttpStatus.OK);
	}
	@GetMapping("/all")
	public ResponseEntity<?> viewBestDrivers(){
		List<Driver> bestDrivers=driverService.viewBestDrivers();
		return new ResponseEntity<List<Driver>>(bestDrivers,HttpStatus.OK);
	}

}
