package com.sgp.erp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgp.erp.model.IAMarks;

@Repository
public interface IAMarksRepository extends JpaRepository<IAMarks, Long> {
    List<IAMarks> findByStudentId(Long studentId);
}

