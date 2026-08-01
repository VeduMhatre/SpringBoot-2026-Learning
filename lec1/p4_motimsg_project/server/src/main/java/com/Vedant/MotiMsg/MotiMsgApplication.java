package com.Vedant.MotiMsg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")

public class MotiMsgApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotiMsgApplication.class, args);
	}
	
	@GetMapping("/motimsg")
	public String motimsg(){
		ArrayList<String> messages = new ArrayList<>();
		messages.add("Live and let live");
		messages.add("Do your best");
		messages.add("Hope for best and prepare for worst");
		messages.add("Good time takes time");
		messages.add("Best of Luck");

		int r = (int)(Math.random()*messages.size());
		String msg = messages.get(r);
		return msg;
	}
}
