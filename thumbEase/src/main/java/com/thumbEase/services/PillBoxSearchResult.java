package com.thumbEase.services;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Pills")
@XmlAccessorType(XmlAccessType.FIELD)
public class PillBoxSearchResult {
	
	@XmlElement(name = "disclaimer")
	private String disclaimer;
	
	@XmlElement(name = "record_count")
	private int recordCount;

	@XmlElement(name = "pill")
	private List<Pill> pills = new ArrayList<Pill>();

	public List<Pill> getPills() {
		return pills;
	}

	public void setPills(List<Pill> pills) {
		this.pills = pills;
	}
	
	public String getDisclaimer() {
		return disclaimer;
	}
	
	public void setDisclaimer(String disclaimer) {
		this.disclaimer = disclaimer;
	}

	public int getRecordCount() {
		return recordCount;
	}

	public void setRecordCount(int recordCount) {
		this.recordCount = recordCount;
	}
}
