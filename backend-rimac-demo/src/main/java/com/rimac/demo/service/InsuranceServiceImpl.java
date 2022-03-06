package com.rimac.demo.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rimac.demo.dto.response.InsuranceListResponse;
import com.rimac.demo.entity.Insurance;
import com.rimac.demo.repository.InsuranceRepository;

@Service
public class InsuranceServiceImpl implements InsuranceService {
	
	@Autowired
	private InsuranceRepository insuranceRepository;

	@Override
	@Transactional(readOnly = true)
	public List<InsuranceListResponse> getAllInsurance() {
		
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); 
		
		List<Insurance> insuraListDB = (List<Insurance>) insuranceRepository.findAll();
		List<InsuranceListResponse> insuranceListResponse = insuraListDB.stream().map(temp -> {
			InsuranceListResponse insuranceItem = new InsuranceListResponse();
			insuranceItem.setInsuranceId(temp.getInsuranceId());
			insuranceItem.setAnio(temp.getAnio());
			insuranceItem.setChassis(temp.getChassis());
			
			String dateSince = dateFormat.format(temp.getDateSince());
			String dateUntil = dateFormat.format(temp.getDateUntil());
			
			insuranceItem.setDateSince(dateSince);
			insuranceItem.setDateUntil(dateUntil);
			insuranceItem.setHasGas(temp.isHasGas() ? "SI" : "NO");
			insuranceItem.setLastName(temp.getLastName());
			insuranceItem.setMotor(temp.getMotor());
			insuranceItem.setName(temp.getName());
			insuranceItem.setNameContractor(temp.getNameContractor());
			insuranceItem.setNumPolicy(temp.getNumPolicy());
			return insuranceItem;
			
		}).collect(Collectors.toList());
	
		return insuranceListResponse;
	}

	@Override
	public Insurance getInsurance(int insuranceId) {
		Insurance insurance = insuranceRepository.findByInsuranceId(insuranceId);
		return insurance;
	}
}
