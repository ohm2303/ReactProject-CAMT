package com.example.demo.controller;

import java.sql.Date;
import java.time.LocalDateTime;
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

import com.example.demo.domain.NovelDetail;
import com.example.demo.repository.NovelDetailRepository;

@RestController
public class NovelDetailController {
    @Autowired
    private NovelDetailRepository novelDetailRepository;

    // post
    @PostMapping("/novels")
    public ResponseEntity<String> createNovel(@RequestBody NovelDetail novel) {
        novel.setRelease_date(LocalDateTime.now());
        if(novel.getPromotion() == null){
            novel.setPromotion("0");
        }
        novel.setCoverPrice(novel.getPrice()-(novel.getPrice()*Integer.parseInt(novel.getPromotion())/100));
        novelDetailRepository.save(novel);
        return ResponseEntity.ok("novel created"+novel.getCoverPrice());
    }

    // get novel all
    @GetMapping("/novels")
    public Collection<NovelDetail> getAllNovel() {
        return novelDetailRepository.findAll();
    }

    // get novel by id
    @GetMapping("/novels/{id}")
    public ResponseEntity<Object> getNovelById(@PathVariable Long id) {
        Optional<NovelDetail> novel = novelDetailRepository.findById(id);
        if (!novel.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found id");
        }
        return ResponseEntity.ok(novel.get());
    }

    // get novel by prefix
    @GetMapping("/novels/search/{prefix}")
    public List<NovelDetail> getNovelByNamePrefix(@PathVariable String prefix) {
        return novelDetailRepository.findBynameStartingWith(prefix);
    }
    // get novel by 

    // update
    @PutMapping("/novels")
    public ResponseEntity<String> updateNovel(@RequestBody NovelDetail novel) {
        if (!novelDetailRepository.existsById(novel.getId())) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Novel not found");
        }
        // update novel
        novelDetailRepository.save(novel);

        // return message
        return ResponseEntity.ok("Update Success");
    }

    // delete
    @DeleteMapping("/novels/{id}")
    public ResponseEntity<String> deleteNovel(@PathVariable Long id) {
        Optional<NovelDetail> novel = novelDetailRepository.findById(id);
        if (!novel.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Novel not found");
        }
        
        novelDetailRepository.deleteById(id);
        return ResponseEntity.ok("Novel Deleted");
    }
}
