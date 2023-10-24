package com.example.managepro.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/")
public class HelloController {


    @GetMapping("/admin")
    public String greeting(){
        return "Hello my lord";
    }

    @GetMapping("/user")
    public String greetingUser(){
        return "Hello my user";
    }
}
