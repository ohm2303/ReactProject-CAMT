package com.example.demo.domain;

import java.sql.Date;
import java.time.LocalDateTime;
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

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "novel_detail")
public class NovelDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private int price;
    private String category;
    private int numpage;
    private double rating;
    private String promotion;
    private String file_pic;
    private String file_test;
    private String file_real;
    private String author;
    private String description;
    private int coverPrice;
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime release_date;

    // reration
    @OneToMany(mappedBy = "id_novel")
    private Set<Basket> baskets = new HashSet<>();
    // table = order
    @OneToMany(mappedBy = "id_novel")
    private Set<Order> orders = new HashSet<>();
    // table = report
    @OneToMany(mappedBy = "novel_id")
    private Set<Report> reports = new HashSet<>();
    // table = review
    @OneToMany(mappedBy = "id_novel")
    private Set<Review> reviews = new HashSet<>();

    public NovelDetail() {
    }

    public NovelDetail(Long id, String name, int price, String category, int numpage, double rating, String promotion,
            String file_pic, String file_test, String file_real, LocalDateTime release_date, String author,
            String description, int coverPrice) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.numpage = numpage;
        this.rating = rating;
        this.promotion = promotion;
        this.file_pic = file_pic;
        this.file_test = file_test;
        this.file_real = file_real;
        this.release_date = release_date;
        this.author = author;
        this.description = description;
        this.coverPrice = coverPrice;
    }

    public int getCoverPrice() {
        return coverPrice;
    }

    public void setCoverPrice(int coverPrice) {
        this.coverPrice = coverPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }

    public int getNumpage() {
        return numpage;
    }

    public double getRating() {
        return rating;
    }

    public String getPromotion() {
        return promotion;
    }

    public String getFile_pic() {
        return file_pic;
    }

    public String getFile_test() {
        return file_test;
    }

    public String getFile_real() {
        return file_real;
    }

    public LocalDateTime getRelease_date() {
        return release_date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setNumpage(int numpage) {
        this.numpage = numpage;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setPromotion(String promotion) {
        this.promotion = promotion;
    }

    public void setFile_pic(String file_pic) {
        this.file_pic = file_pic;
    }

    public void setFile_test(String file_test) {
        this.file_test = file_test;
    }

    public void setFile_real(String file_real) {
        this.file_real = file_real;
    }

    public void setRelease_date(LocalDateTime localDateTime) {
        this.release_date = localDateTime;
    }

}
