package com.rimac.demo.service;

import java.util.List;

import com.rimac.demo.entity.Insurance;

public interface InsuranceService {

	public List<Insurance> getAllInsurance();
	public Insurance getInsurance(int insuranceId);
	
}
