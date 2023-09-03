package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "basket_user")
public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserDetail id_user;

    @ManyToOne
    @JoinColumn(name = "id_novel")
    private NovelDetail id_novel;

    public Basket(){ }

    public Basket(Long id, UserDetail id_user, NovelDetail id_novel) {
        this.id = id;
        this.id_user = id_user;
        this.id_novel = id_novel;
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setId_user(UserDetail id_user) {
        this.id_user = id_user;
    }

    public void setId_novel(NovelDetail id_novel) {
        this.id_novel = id_novel;
    }
 
    
}
