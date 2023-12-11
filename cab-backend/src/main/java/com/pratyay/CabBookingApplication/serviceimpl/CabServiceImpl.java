package com.pratyay.CabBookingApplication.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratyay.CabBookingApplication.domain.Cab;
import com.pratyay.CabBookingApplication.repository.CabRepository;
import com.pratyay.CabBookingApplication.repository.DriverRepository;
import com.pratyay.CabBookingApplication.service.CabService;

@Service
public class CabServiceImpl implements CabService {

	@Autowired
	private CabRepository cabRepository;
	@Autowired
	private DriverRepository driverRepository;
	@Override
	public Cab insertCab(Cab cab) {
		return cabRepository.save(cab);
	}

	@Override
	public Cab updateCab(Cab cab) {
		int id=cab.getCabId();
		Cab toBeupdatedCab = cabRepository.getById(id);	
		toBeupdatedCab.setCabId(cab.getCabId());
		toBeupdatedCab.setCarType(cab.getCarType());
		toBeupdatedCab.setPerKmRate(cab.getPerKmRate());
		return cabRepository.save(toBeupdatedCab);
	}

	@Override
	public Cab deleteCab(int cabId) {
		Cab cab=cabRepository.getById(cabId);
		cabRepository.delete(cab);
		return cab;
	}

	@Override
	public List<Cab> viewCabsOfType(String carType) {
	
		return cabRepository.findByCarType(carType);
	}

	@Override
	public int countCabsOfType(String carType) {
		int count=0;
		List<Cab> cabs = viewCabsOfType(carType);
		for(Cab c: cabs) {
			count++;
			
		}
	 return count;
	}

}
