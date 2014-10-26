package com.thumbEase.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thumbEase.models.QueryModel;

@Service
public class PillboxSearchService {
	
	private static final String CORE_URL = "http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php?key=UJOFO94EEE&shape=%s&color=%s&ingredient=%s";

	@Autowired
	RestService restService;
	
	@Autowired
	PillBoxResponseMarshaller pillBoxResponseMarshaller;
	
	public Map<String, String> cache = new HashMap<String, String>();
	
	public PillBoxSearchResult getPills(QueryModel queryModel) {
		
		PillColor pillColor = PillColor.fromCode(queryModel.getColor());
		PillShape pillShape = PillShape.fromCode(queryModel.getShape());
		
		String shape = "";
		if (null != pillShape) {
			shape = pillShape.getCode();
		}
		
		String color = "";
		if (null != pillColor) {
			color = pillColor.getCode();
		}
		
		String baseUri = String.format(CORE_URL, shape, color, "");
		
		String xml = null;
		if (cache.containsKey(baseUri)) {
			xml = cache.get(baseUri);
		} else {
			xml = restService.getRestResponse(baseUri);
		}
		
		cache.put(baseUri, xml);
		return this.pillBoxResponseMarshaller.convertResponse(xml);
	}

}
