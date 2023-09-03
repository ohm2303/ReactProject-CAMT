package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "seller_secret")
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private UserDetail seller_id;

    private String bank_account_number;
    @JsonProperty("id_card_number")
    private String iD_card_number;
    private String namebank;
    private String identity;

    public Bank(){}

    public Bank(Long id, UserDetail seller_id, String bank_account_number, String iD_card_number, String namebank,
            String identity) {
        this.id = id;
        this.seller_id = seller_id;
        this.bank_account_number = bank_account_number;
        this.iD_card_number = iD_card_number;
        this.namebank = namebank;
        this.identity = identity;
    }

    public Long getId() {
        return id;
    }

    public UserDetail getSeller_id() {
        return seller_id;
    }

    public String getBank_account_number() {
        return bank_account_number;
    }

    public String getiD_card_number() {
        return iD_card_number;
    }

    public String getNamebank() {
        return namebank;
    }

    public String getIdentity() {
        return identity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSeller_id(UserDetail seller_id) {
        this.seller_id = seller_id;
    }

    public void setBank_account_number(String bank_account_number) {
        this.bank_account_number = bank_account_number;
    }

    public void setiD_card_number(String iD_card_number) {
        this.iD_card_number = iD_card_number;
    }

    public void setNamebank(String namebank) {
        this.namebank = namebank;
    }

    public void setIdentity(String identity) {
        this.identity = identity;
    }
    
   
}
