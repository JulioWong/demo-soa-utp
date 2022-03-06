package com.rimac.demo.service;

import java.util.List;

import com.rimac.demo.dto.response.InsuranceResponse;
import com.rimac.demo.entity.Insurance;

public interface InsuranceService {

	public List<InsuranceResponse> getAllInsurance();
	public Insurance getInsurance(int insuranceId);
	
}
