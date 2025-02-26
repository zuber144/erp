package com.sgp.erp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sgp.erp.dao.StudentDao;
import com.sgp.erp.dto.ResponseStructure;
import com.sgp.erp.exception.StudentNotFoundException;
import com.sgp.erp.model.Student;

@Service
public class StudentService {

    @Autowired
    private StudentDao studentDao;

    public ResponseEntity<ResponseStructure<Student>> findByRegistrationNumber(String registrationNumber) {
        Optional<Student> student = studentDao.findByRegistrationNumber(registrationNumber);
        ResponseStructure<Student> structure = new ResponseStructure<Student>();
        if (student.isPresent()) {
            structure.setData(student.get());
            structure.setMessage("Student found");
            structure.setStatus(HttpStatus.OK.value());
            return new ResponseEntity<ResponseStructure<Student>>(structure,
                    HttpStatus.OK);
        }
        throw new StudentNotFoundException();
    }

}
