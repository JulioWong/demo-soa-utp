package com.rimac.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rimac.demo.entity.Insurance;
import com.rimac.demo.service.InsuranceService;

@RestController
@RequestMapping("/api")
public class InsuranceRestController {

	@Autowired
	private InsuranceService insuranceService;
	
	@GetMapping("/insurance")
	public ResponseEntity<?> getAllInsurance() {
		List<Insurance> insuranceList = insuranceService.getAllInsurance();
		
		if (insuranceList != null && insuranceList.size() > 0) {
			return new ResponseEntity<>(insuranceList, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
