package com.example.demo.domain;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "report_user")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserDetail user_id;

    @ManyToOne
    @JoinColumn(name = "novel_id")
    private NovelDetail novel_id;

    private String problem_type;
    private String descrip_problem;
    private String tel;
    private String file_photo;

    public Report() {
    }

    public Report(Long id, UserDetail user_id, NovelDetail novel_id, String problem_type, String descrip_problem,
            String tel, String file_photo) {
        this.id = id;
        this.user_id = user_id;
        this.novel_id = novel_id;
        this.problem_type = problem_type;
        this.descrip_problem = descrip_problem;
        this.tel = tel;
        this.file_photo = file_photo;
    }

    public Long getId() {
        return id;
    }

    public UserDetail getUser_id() {
        return user_id;
    }

    public NovelDetail getNovel_id() {
        return novel_id;
    }

    public String getProblem_type() {
        return problem_type;
    }

    public String getDescrip_problem() {
        return descrip_problem;
    }

    public String getTel() {
        return tel;
    }

    public String getFile_photo() {
        return file_photo;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser_id(UserDetail user_id) {
        this.user_id = user_id;
    }

    public void setNovel_id(NovelDetail novel_id) {
        this.novel_id = novel_id;
    }

    public void setProblem_type(String problem_type) {
        this.problem_type = problem_type;
    }

    public void setDescrip_problem(String descrip_problem) {
        this.descrip_problem = descrip_problem;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setFile_photo(String file_photo) {
        this.file_photo = file_photo;
    }

    
}
