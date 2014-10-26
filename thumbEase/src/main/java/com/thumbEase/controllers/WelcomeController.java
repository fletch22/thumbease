package com.thumbEase.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class WelcomeController {

	@RequestMapping(value = "/test")
	public ModelAndView welcomeFile() {
		return new ModelAndView("index");
	}
}
