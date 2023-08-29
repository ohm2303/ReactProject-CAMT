package com.example.demo.repository;

import java.util.*;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.Report;

public interface ReportRepository extends CrudRepository<Report,Long>{
    public Optional<Report> findById(Long id);
    public List<Report> findAll();
}
