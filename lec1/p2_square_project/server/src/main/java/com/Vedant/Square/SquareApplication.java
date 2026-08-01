package com.Vedant.Square;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")

public class SquareApplication {

	public static void main(String[] args) {
		SpringApplication.run(SquareApplication.class, args);
	}
	@GetMapping("/square")
	public String square(@RequestParam double num){
		String msg = "";
		double res = num * num;
		msg = "Square of " + num + " is " + String.format("%.2f",res);
		return msg;
	}

}
