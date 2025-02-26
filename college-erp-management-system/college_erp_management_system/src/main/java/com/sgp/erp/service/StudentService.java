package com.sgp.erp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sgp.erp.dto.ResponseStructure;
import com.sgp.erp.exception.StudentNotFoundException;
import com.sgp.erp.model.Student;
import com.sgp.erp.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public ResponseEntity<ResponseStructure<Student>> findByRegistrationNumber(String registrationNumber) {
        Optional<Student> student = repository.findByRegistrationNumber(registrationNumber);
        ResponseStructure<Student> structure = new ResponseStructure<Student>();
        // if (student.isPresent()) {
        // structure.setData(student.get());
        // structure.setMessage("Student found");
        // structure.setStatus(HttpStatus.OK.value());
        // return new ResponseEntity<ResponseStructure<Student>>(structure,
        // HttpStatus.OK);
        // }
        // throw new StudentNotFoundException();
        try {
            if (student.isPresent()) {
                structure.setData(student.get());
                structure.setMessage("Student found");
                structure.setStatus(HttpStatus.OK.value());
                return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.OK);
            }
            throw new StudentNotFoundException();
        } catch (StudentNotFoundException e) {
            structure.setData(null);
            structure.setMessage(e.getMessage());
            structure.setStatus(HttpStatus.NOT_FOUND.value());
            return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.NOT_FOUND);
        } finally {
            System.out.println("finally Done!...");
        }
    }

}
