package com.rimac.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rimac.demo.apis.ProviderService;
import com.rimac.demo.dto.InsuranceResponse;
import com.rimac.demo.dto.ProviderRequest;
import com.rimac.demo.service.InsuranceService;

@RestController
@RequestMapping("/api")
public class InsuranceRestController {

	@Autowired
	private InsuranceService insuranceService;
	
	@GetMapping("/insurance")
	public ResponseEntity<?> getAllInsurance() {
		List<InsuranceResponse> insuranceList = insuranceService.getAllInsurance();
		
		if (insuranceList != null && insuranceList.size() > 0) {
			Map<String, Object> response = new HashMap<>();
			response.put("total", insuranceList.size());
			response.put("data", insuranceList);
			
			return new ResponseEntity<>(response, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/insurance/{id}")
	public ResponseEntity<?> getInsurance(@PathVariable Long id) {
		
		InsuranceResponse insurance = insuranceService.getInsurance(id);
		
		if (insurance != null) {
			return new ResponseEntity<>(insurance, HttpStatus.OK);
		}
		
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/insurance/{id}/provider")
	public ResponseEntity<?> sendInsurance(@PathVariable Long id) {
		
		Long proposalId = insuranceService.sendProvider(id);
		
		if (proposalId != null) {
			return new ResponseEntity<>(proposalId, HttpStatus.CREATED);
		}
		
		return new ResponseEntity<>("Error to send to provider!", HttpStatus.INTERNAL_SERVER_ERROR); 
	}
}
