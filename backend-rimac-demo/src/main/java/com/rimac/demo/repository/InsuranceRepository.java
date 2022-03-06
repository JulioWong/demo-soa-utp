package com.rimac.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.rimac.demo.entity.Insurance;

public interface InsuranceRepository extends CrudRepository<Insurance, Long> {

	public Insurance findByInsuranceId(Long insuranceId);
	
}
