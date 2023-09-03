package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "order_user")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserDetail id_user;

    @ManyToOne
    @JoinColumn(name = "id_novel")
    private NovelDetail id_novel;

    private int buy;
    private int basket;

    public Order(){ }
    public Order(Long id, UserDetail id_user, NovelDetail id_novel, int buy, int basket) {
        this.id = id;
        this.id_user = id_user;
        this.id_novel = id_novel;
        this.buy = buy;
        this.basket = basket;
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
    public int getBuy() {
        return buy;
    }
    public int getBasket() {
        return basket;
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
    public void setBuy(int buy) {
        this.buy = buy;
    }
    public void setBasket(int basket) {
        this.basket = basket;
    }

    
}
