package com.sgp.erp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgp.erp.model.IAMarks;
import com.sgp.erp.repository.IAMarksRepository;

@RestController
@RequestMapping("/students")
public class IAMarksController {
    @Autowired
    private IAMarksRepository iaMarksRepository;

    @GetMapping("/{id}/ia-marks")
    public ResponseEntity<List<IAMarks>> getStudentIAMarks(@PathVariable Long id) {
        List<IAMarks> marks = iaMarksRepository.findByStudentId(id);
        return ResponseEntity.ok(marks);
    }
}
