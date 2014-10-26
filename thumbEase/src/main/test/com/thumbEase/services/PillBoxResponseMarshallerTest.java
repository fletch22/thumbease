package com.thumbEase.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class PillBoxResponseMarshallerTest {

	@Test
	public void test() {
		// Arrange
		PillBoxResponseMarshaller pillBoxResponseMarshaller = new PillBoxResponseMarshaller();
		// Act
		String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>" + 
"<Pills>" + 
"<disclaimer>Most images available via Pillbox are not yet part of the official drug labeling and have not yet been verified by the manufacturer/labeler. Data may be different from that submitted by the labeler. NLM makes no warranty that the data is error free. See http://pillbox.nlm.nih.gov/developer.html for further information.</disclaimer>" +
"<record_count>192</record_count>" +
"<pill>" +
	"<SPL_ID>0</SPL_ID>" +
	"<PRODUCT_CODE>11695-4118</PRODUCT_CODE>" +
	"<NDC9>116954118</NDC9>" +
	"<SPLCOLOR>C48325</SPLCOLOR>" +
	"<SPLIMPRINT>4</SPLIMPRINT>" +
	"<SPLSHAPE>C48348</SPLSHAPE>" +
	"<SPLSIZE>2.00</SPLSIZE>" +
	"<SPLSCORE>4</SPLSCORE>" +
	"<RXCUI>892160</RXCUI>" +
	"<RXTTY>SY</RXTTY>" +
	"<RXSTRING>Aspirin 3.9 GM Oral Tablet</RXSTRING>" +
	"<INGREDIENTS>Aspirin</INGREDIENTS>" +
	"<HAS_IMAGE>0</HAS_IMAGE>" +
	"<image_id></image_id>" +
	"<SETID>a673d546-a836-4bab-a691-e5d8e3432806</SETID>" +
	"<DEA_SCHEDULE_CODE></DEA_SCHEDULE_CODE>" +
	"<AUTHOR>Butler Animal Health Supply</AUTHOR>" +
	"<SPL_INACTIVE_ING></SPL_INACTIVE_ING>" +
"</pill></Pills>";
		
		PillBoxSearchResult pillBoxSearchResult = pillBoxResponseMarshaller.convertResponse(xml);
		
		// Assert
		assertNotNull(pillBoxSearchResult);
		assertNotNull(pillBoxSearchResult.getDisclaimer());
		assertEquals("Should be expected number of records.", 192, pillBoxSearchResult.getRecordCount());
		assertEquals("Should be one pill", 1, pillBoxSearchResult.getPills().size());
		
		Pill pill = pillBoxSearchResult.getPills().get(0);
		assertNotNull("Set ID should not be null", pill.getSetId());
	}

}
