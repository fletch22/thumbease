package com.thumbEase.services;

import javax.ws.rs.core.Response;

import org.jboss.resteasy.client.jaxrs.ResteasyClient;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.jboss.resteasy.client.jaxrs.ResteasyWebTarget;
import org.springframework.stereotype.Service;

@Service
public class RestService {
	
	ResteasyClient client = new ResteasyClientBuilder().build();

	public String getRestResponse(String baseUri) {
		ResteasyWebTarget target = client.target(baseUri);
		Response response = target.request().get();
		String responseBody = response.readEntity(String.class);
		response.close();
		return responseBody;
	}
}
