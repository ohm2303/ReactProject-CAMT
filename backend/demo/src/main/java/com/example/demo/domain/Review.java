package com.example.demo.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserDetail id_user;

    @ManyToOne
    @JoinColumn(name = "id_novel")
    private NovelDetail id_novel;

    private String details;
    private int num_like;

    public Review(){}

    public Review(Long id, UserDetail id_user, NovelDetail id_novel, String details, int num_like) {
        this.id = id;
        this.id_user = id_user;
        this.id_novel = id_novel;
        this.details = details;
        this.num_like = num_like;
    }

    public Long getId() {
        return id;
    }

    public UserDetail getId_user() {
        return id_user;
    }

    public NovelDetail getId_novel() {
        return id_novel;
    }

    public String getDetails() {
        return details;
    }

    public int getNum_like() {
        return num_like;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setId_user(UserDetail id_user) {
        this.id_user = id_user;
    }

    public void setId_novel(NovelDetail id_novel) {
        this.id_novel = id_novel;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setNum_like(int num_like) {
        this.num_like = num_like;
    }
    

    
}
