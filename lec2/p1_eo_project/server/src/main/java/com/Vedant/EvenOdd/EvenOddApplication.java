package com.Vedant.EvenOdd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")

public class EvenOddApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvenOddApplication.class, args);
	}
	@GetMapping("/checkeo")
	public String checkeo(@RequestParam int num){
		String msg ="";
		if(num % 2 == 0){
			msg = num + " is Even";
		}
		else{
			msg = num + " is Odd";	
		}
		return msg;
	}

}
