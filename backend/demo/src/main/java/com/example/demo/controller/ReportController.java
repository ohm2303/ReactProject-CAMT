package com.example.demo.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.NovelDetail;
import com.example.demo.domain.Order;
import com.example.demo.domain.Report;
import com.example.demo.domain.UserDetail;
import com.example.demo.repository.NovelDetailRepository;
import com.example.demo.repository.ReportRepository;
import com.example.demo.repository.UserDetailRepository;

@RestController
public class ReportController {
    private final ReportRepository reportRepository;
    private final UserDetailRepository userRepository;
    private final NovelDetailRepository novelRepository;

    @Autowired
    public ReportController(ReportRepository reportRepository, UserDetailRepository userRepository,
            NovelDetailRepository novelRepository) {
        this.reportRepository = reportRepository;
        this.userRepository = userRepository;
        this.novelRepository = novelRepository;
    }

    // create report
    @PostMapping("/reports/{IdUser}/{IdNovel}")
    public ResponseEntity<String> createReport(@PathVariable Long IdUser, @PathVariable Long IdNovel,
            @RequestBody Report report) {
        // Find the UserDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(IdUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(IdNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        report.setUser_id(userDetail);
        report.setNovel_id(novelDetail);
        ;
        reportRepository.save(report);
        return ResponseEntity.ok().body("Reposted");
    }

    // get all report
    @GetMapping("reports")
    public List<Report> getAllReport() {
        return reportRepository.findAll();
    }

    // get report by id
    @GetMapping("/reports/{reportId}")
    public ResponseEntity<Report> getReportById(@PathVariable Long reportId) {
        Optional<Report> optionalReport = reportRepository.findById(reportId);

        if (optionalReport.isPresent()) {
            Report report = optionalReport.get();
            return ResponseEntity.ok(report);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // update
    @PutMapping("/reports/{idUser}/{idNovel}")
    public ResponseEntity<String> updateReport(@PathVariable Long idUser, @PathVariable Long idNovel,
            @RequestBody Report report) {
        // Find the UserDetail and NovelDetail based on the provided Ids
        UserDetail userDetail = userRepository.findById(idUser).orElse(null);
        NovelDetail novelDetail = novelRepository.findById(idNovel).orElse(null);

        if (userDetail == null || novelDetail == null) {
            return ResponseEntity.badRequest().body("User or Novel not found");
        }
        List<Report> reports = reportRepository.findByUserId(idUser);
        for (Report report2 : reports) {
            if (report2.getNovel_id().getId().equals(idNovel)) {
                report.setNovel_id(novelDetail);
                report.setUser_id(userDetail);
                reportRepository.save(report);
            }
        }

        return ResponseEntity.ok("Order updated to buy");
    }

    // delete
    @DeleteMapping("/reports/{reportId}")
    public ResponseEntity<String> deleteReport(@PathVariable Long reportId) {
        Optional<Report> optionalReport = reportRepository.findById(reportId);

        if (optionalReport.isPresent()) {
            Report report = optionalReport.get();
            reportRepository.delete(report);
            return ResponseEntity.ok("Report deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
