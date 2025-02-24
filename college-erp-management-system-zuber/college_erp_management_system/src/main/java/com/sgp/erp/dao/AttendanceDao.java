package com.sgp.erp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sgp.erp.model.Attendance;
import com.sgp.erp.repository.AttendanceRepository;

@Repository
public class AttendanceDao {
    
    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> findByStudentId(String registrationNumber) {
        return attendanceRepository.findByStudentId(registrationNumber);
    }

}
