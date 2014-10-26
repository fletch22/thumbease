package com.thumbEase.services;

import java.io.StringReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.xml.sax.InputSource;

@Component
public class PillBoxResponseMarshaller {

	Logger logger = LoggerFactory.getLogger(PillBoxResponseMarshaller.class);

	public PillBoxSearchResult convertResponse(String xml) {

		PillBoxSearchResult pillBoxSearchResult = null;

		try {
			JAXBContext jaxbContext = JAXBContext
					.newInstance(PillBoxSearchResult.class);

			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

			InputSource inputSource = new InputSource(new StringReader(xml));

			pillBoxSearchResult = (PillBoxSearchResult) jaxbUnmarshaller.unmarshal(inputSource);

		} catch (JAXBException e) {
			throw new RuntimeException(e.getMessage(), e);
		}

		return pillBoxSearchResult;
	}
}
