package com.example.demo.domain;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_detail")
public class UserDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String ID_card_number;
    private String email;
    private String username;
    private String password;
    private String gender;
    private String display_name;
    private int level;


    //reration
    @OneToMany(mappedBy = "id_user")
    private Set<Basket> baskets = new HashSet<>();

    @OneToMany(mappedBy = "user_id")
    private Set<Report> reports = new HashSet<>();

    @OneToMany(mappedBy = "seller_id")
    private Set<Bank> banks = new HashSet<>();

    @OneToMany(mappedBy = "id_user")
    private Set<Review> reviews = new HashSet<>();

    public UserDetail(){}

    public UserDetail(Long id, String email, String username, String password, String gender, String display_name,int level ,String ID_card_number) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.display_name = display_name;
        this.level = level;
        this.ID_card_number = ID_card_number;
    }
    public String getID_card_number() {
        return ID_card_number;
    }
    public void setID_card_number(String iD_card_number) {
        ID_card_number = iD_card_number;
    }

    public int getLevel() {
        return level;
    }
    public void setLevel(int lavel) {
        this.level = lavel;
    }
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getGender() {
        return gender;
    }

    public String getDisplay_name() {
        return display_name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setDisplay_name(String display_name) {
        this.display_name = display_name;
    }

    
}
