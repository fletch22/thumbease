package com.thumbEase;

import static org.junit.Assert.assertTrue;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.client.jaxrs.ResteasyClient;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.jboss.resteasy.client.jaxrs.ResteasyWebTarget;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ClientTest {

	Logger logger = LoggerFactory.getLogger(ClientTest.class);

	@Test
	public void test() {
		// arrange
		getRestResponse("http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php?key=UJOFO94EEE&shape=C48348&color=C48325&ingredient=aspirin");
	
		assertTrue(1 == 1);
	}

	Client client = ClientBuilder.newClient();

	public Response getRestResponse(String baseUri) {
		ResteasyClient client = new ResteasyClientBuilder().build();
		ResteasyWebTarget target = client.target(baseUri);
		Response response = target.request().get();
		String value = response.readEntity(String.class);
		System.out.println(value);
		response.close();
		return response;
	}
}
