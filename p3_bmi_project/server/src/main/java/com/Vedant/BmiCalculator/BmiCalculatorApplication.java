package com.Vedant.BmiCalculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")
public class BmiCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(BmiCalculatorApplication.class, args);
	}
	
	@GetMapping("/bmi")
	public String bmi(@RequestParam double weight, @RequestParam double height){
		String msg ="";
		double bmi = weight/(height * height);
		if(bmi < 18.5)
			msg = "Your bmi is " + String.format("%.2f",bmi) + " and you are underweight";
		else if(bmi < 23.5)
			msg = "Your bmi is " + String.format("%.2f",bmi) + " and you are normal";
		else 
			msg = "Your bmi is " + String.format("%.2f",bmi) + " and you are overweight";
		return msg;
	}

}
