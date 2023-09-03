package com.example.demo.controller;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

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

import com.example.demo.domain.Bank;
import com.example.demo.domain.NovelDetail;
import com.example.demo.domain.UserDetail;
import com.example.demo.repository.BankRepository;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class BankController {
    @Autowired
    private BankRepository bankRepository;

    @Autowired
    private UserDetailRepository userDetailRepository;

    // Create a bank
    @PostMapping("/banks/add/{idSell}")
    public ResponseEntity<String> createBank(@RequestBody Bank bank, @PathVariable Long idSell) {
        UserDetail user = userDetailRepository.findById(idSell).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        bank.setSeller_id(user);
        bankRepository.save(bank);
        return ResponseEntity.status(HttpStatus.CREATED).body("Bank created");
    }

    // Get all banks
    @GetMapping("/banks")
    public ResponseEntity<List<Bank>> getAllBanks() {
        List<Bank> banks = bankRepository.findAll();
        return ResponseEntity.ok(banks);
    }

    // Get bank by ID
    @GetMapping("/banks/{id}")
    public ResponseEntity<Object> getBankById(@PathVariable Long id) {
        Optional<Bank> bank = bankRepository.findById(id);
        if (!bank.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Bank not found");
        }
        return ResponseEntity.ok(bank.get());
    }

    // Update bank
    @PutMapping("/banks/{id}")
    public ResponseEntity<String> updateBank(@PathVariable Long id, @RequestBody Bank updatedBank) {
        Optional<Bank> existingBank = bankRepository.findById(id);
        if (!existingBank.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Bank not found");
        }
        updatedBank.setSeller_id(existingBank.get().getSeller_id());
        updatedBank.setId(id);
        bankRepository.save(updatedBank);

        return ResponseEntity.ok("Bank updated successfully");
    }

    // Delete bank by ID
    @DeleteMapping("/banks/{id}")
    public ResponseEntity<String> deleteBank(@PathVariable Long id) {
        Optional<Bank> bank = bankRepository.findById(id);
        if (!bank.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Bank not found");
        }

        bankRepository.deleteById(id);
        return ResponseEntity.ok("Bank deleted");
    }
}
