package com.sgp.erp.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sgp.erp.model.Attendance;
import com.sgp.erp.repository.AttendanceRepository;

@Repository
public class AttendanceDao {

    @Autowired
    private AttendanceRepository attendanceRepository;

    // Find attendance by date and register number
    public List<Attendance> getAttendanceByDateAndRegisterNo(LocalDate date, String registerNo) {
        return attendanceRepository.findAttendanceByDateAndRegistrationNumber(date, registerNo);
    }

    // Find attendance between start date and end date
    public List<Attendance> getAttendanceByRegisterNoAndDateRange(String registerNo, LocalDate startDate,
            LocalDate endDate) {
        return attendanceRepository.findAttendanceByRegistrationNumberAndDateRange(registerNo, startDate, endDate);
    }

}
