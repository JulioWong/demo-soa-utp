package com.rimac.demo.dto;

import com.google.gson.annotations.SerializedName;

public class ProviderResponse {

	@SerializedName("proposalId")
	private Long proposalId;

	public Long getProposalId() {
		return proposalId;
	}

	public void setProposalId(Long proposalId) {
		this.proposalId = proposalId;
	}
	
}
