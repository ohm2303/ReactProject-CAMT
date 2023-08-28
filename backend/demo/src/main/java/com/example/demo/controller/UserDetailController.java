package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.UserDetailRepository;

@RestController
public class UserDetailController {
    @Autowired
    private UserDetailRepository userDetailRepository;

    //post user
    @PostMapping("/users")
    
    //get all user

    //get user by id

    //delete

    //update
    
}
