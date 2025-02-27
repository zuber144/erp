package com.sgp.erp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sgp.erp.model.IAMarks;

@Repository
public interface IAMarksRepository extends JpaRepository<IAMarks, Long> {
    @Query("SELECT i FROM IAMarks i WHERE i.student.registrationNumber = ?1")
    List<IAMarks> findByRegistrationNumber(String registrationNumber);

    @Query("SELECT i FROM IAMarks i WHERE i.student.registrationNumber = ?1 AND i.subject.subjectName = ?2")
    List<IAMarks> findByRegistrationNumberAndSubjectName(String registrationNumber, String subjectName);

}