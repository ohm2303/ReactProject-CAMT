package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;

import com.example.demo.domain.NovelDetail;

public interface NovelDetailRepository extends CrudRepository<NovelDetail, Long> {
    public List<NovelDetail> findAll();
    public List<NovelDetail> findByid(Long id);
    public List<NovelDetail> findBynameStartingWith(String prefix);
}
