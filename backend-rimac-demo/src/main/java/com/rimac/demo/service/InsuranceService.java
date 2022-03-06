package com.rimac.demo.service;

import java.util.List;

import com.rimac.demo.dto.response.InsuranceListResponse;
import com.rimac.demo.entity.Insurance;

public interface InsuranceService {

	public List<InsuranceListResponse> getAllInsurance();
	public Insurance getInsurance(int insuranceId);
	
}
