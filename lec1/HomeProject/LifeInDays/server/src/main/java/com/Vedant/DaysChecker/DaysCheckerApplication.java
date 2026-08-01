package com.Vedant.DaysChecker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")

public class DaysCheckerApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaysCheckerApplication.class, args);
	}
	@GetMapping("/checker")
	public String checker(@RequestParam int age){
		int days = age * 365;
		String msg ="You are approximately " + days + " old";
		return msg;
	}

}
