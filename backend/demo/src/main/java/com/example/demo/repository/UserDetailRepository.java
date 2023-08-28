package com.example.demo.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.UserDetail;

public interface UserDetailRepository extends CrudRepository<UserDetail,Long> {
    
}
