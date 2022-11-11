package com.microservices.products.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductsController {

    Logger logger = LoggerFactory.getLogger(ProductsController.class);

    
    @GetMapping("/products")
	public Map<String, String> getShoes() {		
		try {
			logger.info("Getting Shoes");
			HashMap<String, String> productsMap = new HashMap<String, String>();
			productsMap.put("tommy", "Tommy Hilfiger Shoe");
			productsMap.put("nikeshoe", "Nike Sports Shoe");
			productsMap.put("adidas", "Adidas Running Shoe");
			return productsMap;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
    
	@GetMapping("/products/sport")
	public String getSportShoes() {		
		try {
			logger.info("Getting Sport Shoes");
			return "List Of Sport Shoes Data";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
