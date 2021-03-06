package com.rimac.demo.dto;

import java.io.Serializable;

public class InsuranceResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long insuranceId;
    private String name;
    private String lastName;
    private String numPolicy;
    private String nameContractor;
    private int anio;
    private String chassis;
    private String motor;
    private String hasGas;
    private String dateSince;
    private String dateUntil;
    private String plate;
    private Long proposalId;
    private String brand;
    private String model;
    
	public InsuranceResponse(Long insuranceId, String name, String lastName, String numPolicy, String nameContractor,
			int anio, String chassis, String motor, String hasGas, String dateSince, String dateUntil, String plate, Long proposalId, String brand, String model) {
		super();
		this.insuranceId = insuranceId;
		this.name = name;
		this.lastName = lastName;
		this.numPolicy = numPolicy;
		this.nameContractor = nameContractor;
		this.anio = anio;
		this.chassis = chassis;
		this.motor = motor;
		this.hasGas = hasGas;
		this.dateSince = dateSince;
		this.dateUntil = dateUntil;
		this.plate = plate;
		this.proposalId = proposalId;
		this.brand = brand;
		this.model = model;
	}

	public InsuranceResponse() {
		
	}
	
	public Long getInsuranceId() {
		return insuranceId;
	}
	
	public void setInsuranceId(Long insuranceId) {
		this.insuranceId = insuranceId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getNumPolicy() {
		return numPolicy;
	}
	
	public void setNumPolicy(String numPolicy) {
		this.numPolicy = numPolicy;
	}
	
	public String getNameContractor() {
		return nameContractor;
	}
	
	public void setNameContractor(String nameContractor) {
		this.nameContractor = nameContractor;
	}
	
	public int getAnio() {
		return anio;
	}
	
	public void setAnio(int anio) {
		this.anio = anio;
	}
	
	public String getChassis() {
		return chassis;
	}
	
	public void setChassis(String chassis) {
		this.chassis = chassis;
	}
	
	public String getMotor() {
		return motor;
	}
	
	public void setMotor(String motor) {
		this.motor = motor;
	}
	
	public String getHasGas() {
		return hasGas;
	}
	
	public void setHasGas(String hasGas) {
		this.hasGas = hasGas;
	}
	
	public String getDateSince() {
		return dateSince;
	}
	
	public void setDateSince(String dateSince) {
		this.dateSince = dateSince;
	}
	
	public String getDateUntil() {
		return dateUntil;
	}
	
	public void setDateUntil(String dateUntil) {
		this.dateUntil = dateUntil;
	}

	public String getPlate() {
		return plate;
	}

	public void setPlate(String plate) {
		this.plate = plate;
	}

	public Long getProposalId() {
		return proposalId;
	}

	public void setProposalId(Long proposalId) {
		this.proposalId = proposalId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
