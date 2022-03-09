package com.rimac.demo.apis;

import java.io.IOException;

import com.rimac.demo.dto.ProviderRequest;
import com.rimac.demo.dto.ProviderResponse;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ProviderService {

	private ProviderApi providerApi;

	public ProviderService() {
		
		Retrofit retrofit = new Retrofit.Builder().baseUrl("http://localhost:8080/").addConverterFactory(GsonConverterFactory.create()).build();
		providerApi = retrofit.create(ProviderApi.class);
	}
	
	public Long NewProposal(ProviderRequest providerRequest) {
		
		ProviderResponse providerResponse = null;
		
		try {
			providerResponse = providerApi.createProposal(providerRequest).execute().body();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return providerResponse != null ? providerResponse.getProposalId() : null;
	}
}
