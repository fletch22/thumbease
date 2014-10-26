package com.thumbEase.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.thumbEase.models.QueryModel;
import com.thumbEase.services.PillBoxSearchResult;
import com.thumbEase.services.PillboxSearchService;
import com.thumbEase.services.RestService;

@RestController
@RequestMapping(value = "/search")
public class SearchController {
	
	@Autowired
	RestService restService;
	
	@Autowired
	PillboxSearchService pillboxSearchService;

	Logger logger = LoggerFactory.getLogger(SearchController.class);
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody PillBoxSearchResult search(QueryModel queryModel) {
		logger.info("Is null: {}", restService == null);
		
		PillBoxSearchResult pillBoxSearchResult = pillboxSearchService.getPills(queryModel); 
		
		return pillBoxSearchResult;
	}
}
