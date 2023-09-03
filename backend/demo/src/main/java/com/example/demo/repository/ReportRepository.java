package com.example.demo.repository;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.domain.Order;
import com.example.demo.domain.Report;

public interface ReportRepository extends CrudRepository<Report,Long>{
    public Optional<Report> findById(Long id);
    public List<Report> findAll();
    @Query("SELECT o FROM Report o WHERE o.user_id.id = :userId")
    List<Report> findByUserId(@Param("userId") Long userId);
}
