package com.pratyay.CabBookingApplication.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

/*
 * This is cab class for storing cab details
 */
@Entity
public class Cab {

	/*
	 * this is primary key for cab table
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cabId;

	/*
	 * this is for storing car type like premium , mini, prime and cannot be null
	 */

	@NotBlank(message = "Car type is required")
	private String carType;

	/*
	 * this the rate for cab
	 */
	@NotBlank(message = "Km per rate is required")
	private float perKmRate;
	
	/*
	 * cab having one to one relation with driver
	 */
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "cab")
	private Driver driver;

	public Cab() {
		super();
	}

	public int getCabId() {
		return cabId;
	}

	public void setCabId(int cabId) {
		this.cabId = cabId;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public float getPerKmRate() {
		return perKmRate;
	}

	public void setPerKmRate(float perKmRate) {
		this.perKmRate = perKmRate;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}
}
