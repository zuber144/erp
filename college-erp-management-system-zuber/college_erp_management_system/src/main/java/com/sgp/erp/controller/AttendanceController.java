package com.sgp.erp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sgp.erp.model.Attendance;
import com.sgp.erp.repository.AttendanceRepository;

@RestController
@RequestMapping("/students")
public class AttendanceController {
    @Autowired
    private AttendanceRepository attendanceRepository;

    @GetMapping("/attendance")
    public ResponseEntity<?> getStudentAttendance(@RequestParam String registrationNumber) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        System.out.println("🔍 Request received for /student/attendance/" + registrationNumber);
        System.out.println("🔐 Authenticated user: " + (authentication != null ? authentication.getName() : "NULL"));
        System.out.println("👤 Roles: " + (authentication != null ? authentication.getAuthorities() : "NONE"));

        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(403).body("Forbidden: User is not authenticated.");
        }

        List<Attendance> attendance = attendanceRepository.findByStudentId(registrationNumber);
        System.out.println("📝 Fetched " + attendance.size() + " attendances for " + registrationNumber);
        return ResponseEntity.ok(attendance);
    }
}
