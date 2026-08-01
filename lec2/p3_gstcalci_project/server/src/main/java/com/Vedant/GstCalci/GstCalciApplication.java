package com.Vedant.GstCalci;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins="*")
public class GstCalciApplication {

	public static void main(String[] args) {
		SpringApplication.run(GstCalciApplication.class, args);
	}

	@PostMapping("/gstcalci")
	public Map<String, String>find(@RequestBody HashMap<String, Double>data){
		double amt = data.get("amt");
		double gst = data.get("gst");
		String msg = "";
		
		if(amt < 1){
			msg = "Amount should not be less than 1";
		}
		else if(gst < 1){
			msg = "GST should not be less than 1";
		}		
		else{
			double final_amt =  amt + (amt * (gst/100));
			msg = "Final amount including gst = ₹" + final_amt; 
		}
		
		Map<String, String> res = new HashMap<String, String>();
		res.put("msg",msg);
		return res;
	}

}
