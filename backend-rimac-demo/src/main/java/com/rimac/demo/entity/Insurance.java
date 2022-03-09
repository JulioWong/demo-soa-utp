package com.rimac.demo.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Esta clase define las entidades del bakend de rimac
 * @author: Julio Wong
 * @version: 22/09/2016/A
 */

@Entity
@Table(name = "insurance")
public class Insurance implements Serializable {
		
	public Insurance() {
		
	}
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "insuranceid")
	private Long insuranceId;
	
	private String name;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "num_policy")
	private String numPolicy;
	
	@Column(name = "name_contractor")
	private String nameContractor;
	
	@Column(name = "anio")
	private int anio;
	
	@Column(name = "chassis")
	private String chassis;
	
	@Column(name = "motor")
	private String motor;
	
	@Column(name = "imei")
	private String imei;
	
	@Column(name = "proposal_id")
	private Long proposalId;
	
	@Column(name = "has_gas")
	private boolean hasGas;
	
	@Column(name = "date_since", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateSince;
	
	@Column(name = "date_until", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateUntil;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "address")
	private String address;
	
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
	
	public Date getDateSince() {
		return dateSince;
	}
	
	public void setDateSince(Date dateSince) {
		this.dateSince = dateSince;
	}
	
	public Date getDateUntil() {
		return dateUntil;
	}
	
	public void setDateUntil(Date dateUntil) {
		this.dateUntil = dateUntil;
	}

	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
		this.imei = imei;
	}

	public Long getProposalId() {
		return proposalId;
	}

	public void setProposalId(Long proposalId) {
		this.proposalId = proposalId;
	}

	public boolean isHasGas() {
		return hasGas;
	}

	public void setHasGas(boolean hasGas) {
		this.hasGas = hasGas;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
}
