package com.rimac.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rimac.demo.entity.Insurance;
import com.rimac.demo.repository.InsuranceRepository;

@Service
public class InsuranceServiceImpl implements InsuranceService {
	
	@Autowired
	private InsuranceRepository insuranceRepository;

	@Override
	@Transactional(readOnly = true)
	public List<Insurance> getAllInsurance() {
		List<Insurance> insuraList = (List<Insurance>) insuranceRepository.findAll();
		return insuraList;
	}

	@Override
	public Insurance getInsurance(int insuranceId) {
		Insurance insurance = insuranceRepository.findByInsuranceId(insuranceId);
		return insurance;
	}
}
