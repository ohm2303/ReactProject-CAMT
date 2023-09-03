package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.Basket;

public interface BasketRepository extends CrudRepository<Basket, Long>{
    public List<Basket> findAll();
    public Optional<Basket> findById(Long id);
}
