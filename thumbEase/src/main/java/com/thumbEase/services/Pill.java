package com.thumbEase.services;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "pill")
public class Pill {

	private String splId;

	private String productCode;
	
	private String ndc9;

	private String splColor;
	
	private String splPrint;

	private String splShape;

	private String splSize;

	private String splScore;

	private String rxCui;

	private String rxTty;
	
	private String rxString;

	private String ingredients;

	private boolean hasImage;

	private String imageId;

	private String setId;

	private String deaScheduleCode;

	private String author;

	private String splInactiveIng;

	public String getProductCode() {
		return productCode;
	}

	@XmlElement(name = "PRODUCT_CODE")
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getNdc9() {
		return ndc9;
	}

	@XmlElement(name = "NDC9")
	public void setNdc9(String ndc9) {
		this.ndc9 = ndc9;
	}
	
	public String getColorName() {
		return PillColor.fromCode(this.getSplColor()).toString();
	}
	
	public String getColorHtmlCode() {
		return PillColor.fromCode(this.getSplColor()).getHtmlColor();
	}

	public String getSplColor() {
		return splColor;
	}

	@XmlElement(name = "SPLCOLOR")
	public void setSplColor(String splColor) {
		this.splColor = splColor;
	}

	public String getSplPrint() {
		return splPrint;
	}

	public void setSplPrint(String splPrint) {
		this.splPrint = splPrint;
	}

	public String getSplShape() {
		return splShape;
	}

	@XmlElement(name = "SPLSHAPE")
	public void setSplShape(String splShape) {
		this.splShape = splShape;
	}

	public String getSplSize() {
		return splSize;
	}

	@XmlElement(name = "SPLSIZE")
	public void setSplSize(String splSize) {
		this.splSize = splSize;
	}

	public String getSplScore() {
		return splScore;
	}

	@XmlElement(name = "SPLSCORE")
	public void setSplScore(String splScore) {
		this.splScore = splScore;
	}

	public String getRxCui() {
		return rxCui;
	}

	@XmlElement(name = "RXCUI")
	public void setRxCui(String rxCui) {
		this.rxCui = rxCui;
	}

	public String getRxTty() {
		return rxTty;
	}

	@XmlElement(name = "RXTTY")
	public void setRxTty(String rxTty) {
		this.rxTty = rxTty;
	}

	public String getRxString() {
		return rxString;
	}
	
	@XmlElement(name = "RXSTRING")
	public void setRxString(String rxString) {
		this.rxString = rxString;
	}

	public String getIngredients() {
		return ingredients;
	}

	@XmlElement(name = "INGREDIENTS")
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public boolean isHasImage() {
		return hasImage;
	}

	@XmlElement(name = "HAS_IMAGE")
	public void setHasImage(boolean hasImage) {
		this.hasImage = hasImage;
	}

	public String getImageId() {
		return imageId;
	}

	@XmlElement(name = "image_id")
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}

	public String getSetId() {
		return setId;
	}

	@XmlElement(name = "SETID")
	public void setSetId(String setId) {
		this.setId = setId;
	}

	public String getDeaScheduleCode() {
		return deaScheduleCode;
	}

	@XmlElement(name = "DEA_SCHEDULE_CODE")
	public void setDeaScheduleCode(String deaScheduleCode) {
		this.deaScheduleCode = deaScheduleCode;
	}

	public String getAuthor() {
		return author;
	}

	@XmlElement(name = "AUTHOR")
	public void setAuthor(String author) {
		this.author = author;
	}

	public String getSplInactiveIng() {
		return splInactiveIng;
	}

	@XmlElement(name = "SPL_INACTIVE_ING")
	public void setSplInactiveIng(String splInactiveIng) {
		this.splInactiveIng = splInactiveIng;
	}

	public String getSplId() {
		return splId;
	}

	@XmlElement(name = "SPL_ID")
	public void setSplId(String splId) {
		this.splId = splId;
	}
}
