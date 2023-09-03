package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.domain.UserDetail;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class UserDetailController {
    @Autowired
    private UserDetailRepository userDetailRepository;

    //post user
    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody UserDetail user){
        userDetailRepository.save(user);
        return ResponseEntity.ok("created user");
    }
    //post user back
    @PostMapping("/users/bank")
    public ResponseEntity<Long> createUserBank(@RequestBody UserDetail user){
        userDetailRepository.save(user);
        return ResponseEntity.ok(user.getId());
    }
    //get all user
    @GetMapping("/users")
    public Collection<UserDetail> getAllUser(){
        return userDetailRepository.findAll();
    }
    //get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        List<UserDetail> user = userDetailRepository.findByid(id);

        //check id is empty
        if(user.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
        }
        return ResponseEntity.ok(user);
    }
    //delete
    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> DeleteUser(@PathVariable Long id){
        List<UserDetail> user = userDetailRepository.findByid(id);
        if(user.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        userDetailRepository.deleteById(id);
        return ResponseEntity.ok("User Deleted");
    }
    //update
    @PutMapping("/users")
    public ResponseEntity<String> UpdateUser(@RequestBody UserDetail user){
        if(!userDetailRepository.existsById(user.getId())){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        //update user
        userDetailRepository.save(user);

        //return massage
        return ResponseEntity.ok("Update Success");
    }
}
