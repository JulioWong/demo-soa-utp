package com.rimac.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rimac.demo.dto.response.InsuranceListResponse;
import com.rimac.demo.entity.Insurance;
import com.rimac.demo.service.InsuranceService;

@RestController
@RequestMapping("/api")
public class InsuranceRestController {

	@Autowired
	private InsuranceService insuranceService;
	
	@GetMapping("/insurance")
	public ResponseEntity<?> getAllInsurance() {
		List<InsuranceListResponse> insuranceList = insuranceService.getAllInsurance();
		
		if (insuranceList != null && insuranceList.size() > 0) {
			Map<String, Object> response = new HashMap<>();
			
			response.put("total", insuranceList.size());
			response.put("data", insuranceList);
			
			return new ResponseEntity<>(response, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
