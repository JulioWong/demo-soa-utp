package com.rimac.demo.service;

import java.util.List;

import com.rimac.demo.dto.InsuranceResponse;
import com.rimac.demo.dto.ProviderRequest;

public interface InsuranceService {

	public List<InsuranceResponse> getAllInsurance();
	
	public InsuranceResponse getInsurance(Long insuranceId);
	
	public Long sendProvider(Long insuranceId);
	
}
