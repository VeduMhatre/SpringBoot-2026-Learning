package com.Vedant.SquareFinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")

public class SquareFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(SquareFinderApplication.class, args);
	}
	@GetMapping("/square")
	public String square(@RequestParam double num){
		String msg = "";
		double res = num * num;
		msg = "Square of Number " + num + " = " + String.format("%.2f",res);
		return msg;
	}
}
