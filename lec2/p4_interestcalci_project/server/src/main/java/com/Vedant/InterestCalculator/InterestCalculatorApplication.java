package com.Vedant.InterestCalculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")

public class InterestCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(InterestCalculatorApplication.class, args);
	}
	
	@PostMapping("/interest")
	public Map<String,String> find(@RequestBody HashMap<String,Object>data){

		double principal = ((Number)data.get("principal")).doubleValue();
		double roi = ((Number)data.get("roi")).doubleValue();
		double time = ((Number)data.get("time")).doubleValue();
		String choice = (String)data.get("choice");	
		
		String msg = "";
			
		if(principal < 1000){
			msg = "Principal Amount should not be less than 1000";
		}
		else if(roi < 3){
			msg = "Rate of Interest should not be less than 3%";
		}
		else if(time < 1){
			msg = "Time should not be less than 1 year";	
		}
		else{
			if(choice.equals("si")){
				double iamt = (principal * roi * time) / 100;
				msg = "Simple Interest amount = ₹" + iamt;
			}
			else{
				double iamt = (principal * Math.pow(1+(roi/100),time))-principal;
				msg = "Compund Interest amount = ₹" + iamt;
			}

		}
		
		Map<String,String> res = new HashMap<String,String>();
		res.put("msg",msg);
		return res;
	}
}
