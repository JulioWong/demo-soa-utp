package com.rimac.demo.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rimac.demo.apis.ProviderService;
import com.rimac.demo.dto.InsuranceResponse;
import com.rimac.demo.dto.ProviderRequest;
import com.rimac.demo.entity.Insurance;
import com.rimac.demo.repository.InsuranceRepository;

@Service
public class InsuranceServiceImpl implements InsuranceService {
	
	DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); 
	
	@Autowired
	private InsuranceRepository insuranceRepository;

	@Override
	@Transactional(readOnly = true)
	public List<InsuranceResponse> getAllInsurance() {
		
		List<Insurance> insuraListDB = (List<Insurance>) insuranceRepository.findAll();
		List<InsuranceResponse> insuranceListResponse = insuraListDB.stream().map(temp -> {
			InsuranceResponse insuranceItem = new InsuranceResponse();
			String dateSince = dateFormat.format(temp.getDateSince());
			String dateUntil = dateFormat.format(temp.getDateUntil());
			
			insuranceItem.setInsuranceId(temp.getInsuranceId());
			insuranceItem.setAnio(temp.getAnio());
			insuranceItem.setChassis(temp.getChassis());
			insuranceItem.setDateSince(dateSince);
			insuranceItem.setDateUntil(dateUntil);
			insuranceItem.setHasGas(temp.isHasGas() ? "SI" : "NO");
			insuranceItem.setLastName(temp.getLastName());
			insuranceItem.setMotor(temp.getMotor());
			insuranceItem.setName(temp.getName());
			insuranceItem.setNameContractor(temp.getNameContractor());
			insuranceItem.setNumPolicy(temp.getNumPolicy());
			insuranceItem.setPlate(temp.getPlate());
			insuranceItem.setProposalId(temp.getProposalId());
			return insuranceItem;
			
		}).collect(Collectors.toList());
	
		return insuranceListResponse;
	}

	@Override
	public InsuranceResponse getInsurance(Long insuranceId) {
		Insurance insurance = insuranceRepository.findByInsuranceId(insuranceId);
		InsuranceResponse insuranceResponse = new InsuranceResponse();
		
		String dateSince = dateFormat.format(insurance.getDateSince());
		String dateUntil = dateFormat.format(insurance.getDateUntil());
		
		insuranceResponse.setInsuranceId(insurance.getInsuranceId());
		insuranceResponse.setAnio(insurance.getAnio());
		insuranceResponse.setChassis(insurance.getChassis());
		insuranceResponse.setDateSince(dateSince);
		insuranceResponse.setDateUntil(dateUntil);
		insuranceResponse.setHasGas(insurance.isHasGas() ? "SI" : "NO");
		insuranceResponse.setLastName(insurance.getLastName());
		insuranceResponse.setMotor(insurance.getMotor());
		insuranceResponse.setName(insurance.getName());
		insuranceResponse.setNameContractor(insurance.getNameContractor());
		insuranceResponse.setNumPolicy(insurance.getNumPolicy());
		insuranceResponse.setPlate(insurance.getPlate());
		insuranceResponse.setProposalId(insurance.getProposalId());
		return insuranceResponse;
	}

	@Override
	public Long sendProvider(Long insuranceId) {
		
		Insurance insurance = insuranceRepository.findByInsuranceIdAndNoSent(insuranceId);
		
		if (insurance != null) {
			ProviderRequest providerRequest = new ProviderRequest();
			
			providerRequest.setName(insurance.getName());
			providerRequest.setLast_name(insurance.getLastName());
			providerRequest.setPhone(insurance.getPhone());
			providerRequest.setAddress(insurance.getAddress());
			providerRequest.setPlate(insurance.getPlate());
			
			ProviderService providerService = new ProviderService();
			Long proposalId = providerService.NewProposal(providerRequest);
			
			
			if (proposalId != null) {
				insurance.setProposalId(proposalId);
				insuranceRepository.save(insurance);
			}
			
			return proposalId;
		}
		
		return null;
	}
}
