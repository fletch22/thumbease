package com.thumbEase.services;

public enum PillShape {
	
	BULLET("Circle", "C48335"),
	CAPSULE("Capsule", "C48336"),
	CLOVER("Clover", "C48337"),
	DIAMOND("Diamond", "C48338"),
	DOUBLE_CIRCLE("Dbl. Circle", "C48339"),
	FREEFORM("Freeform", "C48340"),
	GEAR("Gear", "C48341"),
	HEPTAGON("7 Sides", "C48342"),
	HEXAGON("6 Sides", "C48343"),
	OCTAGON("8 Sides", "C48344"),
	OVAL("Oval", "C48345"),
	PENTAGON("Pentagon", "C48346"),
	RECTANGLE("Rectangle", "C48347"),
	ROUND("Round", "C48348"),
	CIRCLE("Circle", "C48349"),
	SQUARE("Square", "C48350"),
	TEAR("Tear", "C48351"),
	TRAPEZOID("Trapezoid", "C48352"),
	TRIANGLE("Triangle", "C48353");
	
	private String displayText;
	private String code;
	
	private PillShape(String displayText, String code) {
		this.displayText = displayText;
		this.code = code;
	}
	
	public static PillShape fromDisplayText(String displayText) {
		PillShape found = null;
		for (PillShape pillShape: PillShape.values()) { 
			if (displayText.equals(pillShape.displayText)) {
				found = pillShape;
				break;
			}
		}
		return found;
	}
	
	public static PillShape fromCode(String code) {
		PillShape found = null;
		for (PillShape pillShape: PillShape.values()) { 
			if (code.equals(pillShape.code)) {
				found = pillShape;
				break;
			}
		}
		return found;
	}
	
	public String getDisplayText() {
		return this.displayText;
	}
	
	public String getCode() {
		return this.code;
	}
}
