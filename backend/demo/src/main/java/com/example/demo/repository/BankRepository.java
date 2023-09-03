package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.Bank;
import java.util.*;

public interface BankRepository extends CrudRepository<Bank,Long>{
    public List<Bank> findAll();
    public Optional<Bank> findById(Long id);
}
