package com.example.demo.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.domain.Basket;
import com.example.demo.domain.NovelDetail;
import com.example.demo.domain.Order;
import com.example.demo.domain.UserDetail;
import com.example.demo.repository.NovelDetailRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class OrderController {
    private final OrderRepository orderRepository;
    private final UserDetailRepository userRepository;
    private final NovelDetailRepository novelRepository;

    @Autowired
    public OrderController(OrderRepository orderRepository, UserDetailRepository userRepository,
            NovelDetailRepository novelRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.novelRepository = novelRepository;
    }

    // Create a new basket entry
    @PostMapping("/orders/basket/{IdUser}/{IdNovel}")
    public ResponseEntity<String> createBasket(@PathVariable Long IdUser, @PathVariable Long IdNovel) {
        // Find the UserDetail and NovelDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(IdUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(IdNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User or Novel not found");
        }

        // Check if the user already has this novel in their basket
        List<Order> orders = orderRepository.findByUserId(IdUser);
        for (Order order : orders) {
            if (order.getId_novel().getId().equals(IdNovel) && order.getBasket() == 1) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You already have this novel in basket");
            }
        }
        // Check if the user already has this novel in their buy
        for (Order order : orders) {
            if (order.getId_novel().getId().equals(IdNovel) && order.getBuy() == 1) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You already buy this novel");
            }
        }
        // Create a new Order entry and save it
        Order order = new Order();
        order.setId_user(userDetail);
        order.setId_novel(novelDetail);
        order.setBasket(1);
        orderRepository.save(order);

        return ResponseEntity.ok("Basket created");
    }

    // Update order basket to buy
    @PutMapping("/orders/buy/{idUser}/{idNovel}")
    public ResponseEntity<String> updateOrderToBuy(@PathVariable Long idUser, @PathVariable Long idNovel) {
        // Find the UserDetail and NovelDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(idUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(idNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User or Novel not found");
        }

         List<Order> orders = orderRepository.findByUserId(idUser);
        for (Order order : orders) {
            if (order.getId_novel().getId().equals(idNovel) && order.getBasket() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No such order found in basket");
            }
        }

        // Update the order to 'buy'
        for (Order order : orders) {
            if (order.getId_novel().getId().equals(idNovel) && order.getBasket() == 1) {
                order.setBuy(1);
                order.setBasket(0);
               orderRepository.save(order);
            }
        }

        return ResponseEntity.ok("Order updated to buy");
    }

    // Get all orders
    @GetMapping("/orders")
    public List<Order> getAllBaskets() {
        return orderRepository.findAll();
    }

    // Get order by ID
    @GetMapping("/orders/{id}")
    public ResponseEntity<?> getBasketById(@PathVariable Long id) {
        Optional<Order> optOrder = orderRepository.findById(id);
        if (optOrder.isPresent()) {
            Order order = optOrder.get();
            // You might want to convert the basket to a DTO if needed
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete basket by ID
    @DeleteMapping("/orders/{id}")
    public ResponseEntity<String> deleteBasketById(@PathVariable Long id) {
        Optional<Order> optOrder = orderRepository.findById(id);
        if (optOrder.isPresent()) {
            Order order = optOrder.get();
            orderRepository.delete(order);

            return ResponseEntity.ok("Basket deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
