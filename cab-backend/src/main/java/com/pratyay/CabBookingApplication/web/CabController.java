package com.pratyay.CabBookingApplication.web;

import java.util.List;

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

import com.pratyay.CabBookingApplication.domain.Cab;
import com.pratyay.CabBookingApplication.service.CabService;
import com.pratyay.CabBookingApplication.service.MapValidationErrorService;


@RestController
@RequestMapping("/api/cabs")
public class CabController {

	@Autowired
	private CabService cabService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	@PostMapping("")
	public ResponseEntity<?> addCab(@Valid @RequestBody Cab cab, BindingResult result){
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null) return errorMap;
		Cab savedCab = cabService.insertCab(cab);
		return new ResponseEntity<Cab>(savedCab, HttpStatus.CREATED);
	}

	@PatchMapping("/{cabId}")
	public ResponseEntity<?> updateCab(@Valid @RequestBody Cab cab,@PathVariable int cabId, BindingResult result){
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null) return errorMap;
		cab.setCabId(cabId);
		Cab updatedCab = cabService.updateCab(cab);
		return new ResponseEntity<Cab>(updatedCab, HttpStatus.OK);
	}
	@DeleteMapping("/{cabId}")
	public ResponseEntity<?> deleteCab(@PathVariable int cabId){
		cabService.deleteCab(cabId);
		return new ResponseEntity<String>("Cab with id : '"+cabId+"' is deleted.",HttpStatus.OK);
	}
	@GetMapping("/{carType}")
	public ResponseEntity<?> viewCabofType(@PathVariable String carType){
		List<Cab> cabOfType =  cabService.viewCabsOfType(carType);
		return new ResponseEntity<List<Cab>>(cabOfType, HttpStatus.OK);
	}
	@GetMapping("/count/{carType}")
	public ResponseEntity<?> countCabsofType(@PathVariable String carType){
		int countcabsOfType =  cabService.countCabsOfType(carType);
		return new ResponseEntity<Integer>(countcabsOfType, HttpStatus.OK);
	}
}
