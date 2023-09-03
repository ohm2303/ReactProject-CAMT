package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.domain.Basket;
import com.example.demo.domain.NovelDetail;
import com.example.demo.domain.UserDetail;
import com.example.demo.repository.BasketRepository;
import com.example.demo.repository.NovelDetailRepository;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class BasketController {
    private final BasketRepository basketRepository;
    private final UserDetailRepository userRepository;
    private final NovelDetailRepository novelRepository;

    @Autowired
    public BasketController(BasketRepository basketRepository, UserDetailRepository userRepository,
            NovelDetailRepository novelRepository) {
        this.basketRepository = basketRepository;
        this.userRepository = userRepository;
        this.novelRepository = novelRepository;
    }

    // Create a new basket entry
    @PostMapping("/baskets/{IdUser}/{IdNovel}")
    public ResponseEntity<String> createBasket(@PathVariable Long IdUser, @PathVariable Long IdNovel) {
        // Find the UserDetail and NovelDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(IdUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(IdNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User or Novel not found");
        }

        // Create a new Basket entry and save it
        Basket basket = new Basket();
        basket.setId_user(userDetail);
        basket.setId_novel(novelDetail);
        basketRepository.save(basket);

        return ResponseEntity.ok("Basket created");
    }

    // Get all baskets
    @GetMapping("/baskets")
    public Iterable<Basket> getAllBaskets() {
        return basketRepository.findAll();
    }

    // Get basket by ID
    @GetMapping("/baskets/{basketId}")
    public ResponseEntity<?> getBasketById(@PathVariable Long basketId) {
        Optional<Basket> optionalBasket = basketRepository.findById(basketId);
        if (optionalBasket.isPresent()) {
            Basket basket = optionalBasket.get();
            // You might want to convert the basket to a DTO if needed
            return ResponseEntity.ok(basket);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update basket by ID
    @PutMapping("/baskets/{basketId}/{IdUser}/{IdNovel}")
    public ResponseEntity<String> updateBasketById(@PathVariable Long basketId, @PathVariable Long IdUser, @PathVariable Long IdNovel) {
        Optional<Basket> optionalBasket = basketRepository.findById(basketId);
        if (optionalBasket.isPresent()) {
            Basket basket = optionalBasket.get();
            
            // Update the basket's user and novel details
            // Assuming that you have methods to find UserDetail and NovelDetail entities by their IDs
            UserDetail userDetail =  userRepository.findById(IdUser).orElse(null);
            NovelDetail novelDetail = novelRepository.findById(IdNovel).orElse(null);
            
            if (userDetail != null && novelDetail != null) {
                basket.setId_user(userDetail);
                basket.setId_novel(novelDetail);;
                
                basketRepository.save(basket);
                
                return ResponseEntity.ok("Basket updated");
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete basket by ID
    @DeleteMapping("/baskets/{basketId}")
    public ResponseEntity<String> deleteBasketById(@PathVariable Long basketId) {
        Optional<Basket> optionalBasket = basketRepository.findById(basketId);
        if (optionalBasket.isPresent()) {
            Basket basket = optionalBasket.get();
            basketRepository.delete(basket);

            return ResponseEntity.ok("Basket deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
