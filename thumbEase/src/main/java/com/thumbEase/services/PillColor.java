package com.thumbEase.services;

public enum PillColor {

	BLACK("C48323", "0"),
	BLUE("C48333", "0000FF"),
	Brown("C48332", "964B00"),
	GRAY("C48324", "808080"),
	GREEN("C48329", "8000"),
	ORANGE("C48331", "FFA500"),
	PINK("C48328", "FFC0CB"),
	PURPLE("C48327", "800080"),
	RED("C48326", "FF0000"),
	TURQUOISE("C48334", "30D5C8"),
	WHITE("C48325", "FFFFFF"),
	YELLOW("C48330", "FFFF00");
	
	private String code;
	private String htmlColor;
	
	private PillColor(String code, String htmlColor) {
		this.code = code;
		this.htmlColor = htmlColor;
	}
	
	public static PillColor fromCode(String code) {
		PillColor found = null;
		for (PillColor pillColor: PillColor.values()) { 
			if (code.equals(pillColor.code)) {
				found = pillColor;
				break;
			}
		}
		return found;
	}
	
	public String getHtmlColor() {
		return this.htmlColor;
	}
	
	public String getCode() {
		return this.code;
	}
}
