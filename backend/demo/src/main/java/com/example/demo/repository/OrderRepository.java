package com.example.demo.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.domain.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAll();

    @Query("SELECT o FROM Order o WHERE o.id_user.id = :userId")
    List<Order> findByUserId(@Param("userId") Long userId);
}