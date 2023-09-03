package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.NovelDetail;
import com.example.demo.domain.Order;
import com.example.demo.domain.Review;
import com.example.demo.domain.UserDetail;
import com.example.demo.repository.NovelDetailRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ReportRepository;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final UserDetailRepository userRepository;
    private final NovelDetailRepository novelRepository;

    @Autowired
    public ReviewController(ReviewRepository reviewRepository, UserDetailRepository userRepository,
            NovelDetailRepository novelRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.novelRepository = novelRepository;
    }

    // post
    @PostMapping("/reviews/{IdUser}/{IdNovel}")
    public ResponseEntity<String> createBasket(@PathVariable Long IdUser, @PathVariable Long IdNovel,
            @RequestBody Review review) {
        // Find the UserDetail and NovelDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(IdUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(IdNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User or Novel not found");
        }

        review.setId_user(userDetail);
        review.setId_novel(novelDetail);
        reviewRepository.save(review);

        return ResponseEntity.ok("Review created");
    }

    // สร้างเมธอดสำหรับดึงข้อมูลรีวิวทั้งหมด
    @GetMapping("/reviews")
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }



}
