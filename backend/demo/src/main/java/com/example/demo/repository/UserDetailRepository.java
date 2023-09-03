package com.example.demo.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.UserDetail;

public interface UserDetailRepository extends CrudRepository<UserDetail,Long> {
    public List<UserDetail> findAll();
    public List<UserDetail> findByid(Long id);
}
