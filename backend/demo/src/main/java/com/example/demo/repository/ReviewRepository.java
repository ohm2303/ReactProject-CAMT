package com.example.demo.repository;

import java.util.*;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.Review;

public interface ReviewRepository extends CrudRepository<Review,Long>{
    public List<Review> findAll();
    public List<Review> findByid(Long id);
}
