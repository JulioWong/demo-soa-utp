package com.rimac.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.rimac.demo.entity.Insurance;

public interface InsuranceRepository extends CrudRepository<Insurance, Long> {

	public Insurance findByInsuranceId(Long insuranceId);
	
	@Query("select i from Insurance i where i.insuranceId = ?1 and i.proposalId is null")
	public Insurance findByInsuranceIdAndNoSent(Long insuranceId);
}
