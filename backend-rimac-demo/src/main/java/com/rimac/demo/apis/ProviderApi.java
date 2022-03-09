package com.rimac.demo.apis;

import com.rimac.demo.dto.ProviderRequest;
import com.rimac.demo.dto.ProviderResponse;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface ProviderApi {

	@POST("/api/proposal")
    public Call<ProviderResponse> createProposal(@Body ProviderRequest body);
	
}
