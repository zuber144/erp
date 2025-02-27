package com.sgp.erp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.sgp.erp.dao.SubjectDao;
import com.sgp.erp.dto.ResponseStructure;
import com.sgp.erp.model.Subject;

@Service
public class SubjectService {

    @Autowired
    private SubjectDao subjectDao;

    public ResponseEntity<ResponseStructure<Subject>> saveSubject(Subject subject) {
        Subject savedSubject = subjectDao.saveSubject(subject);
        ResponseStructure<Subject> structure = new ResponseStructure<>();
        structure.setData(savedSubject);
        structure.setMessage("Subject saved successfully");
        structure.setStatus(HttpStatus.CREATED.value());
        return new ResponseEntity<>(structure, HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseStructure<String>> deleteSubject(Integer subjectId) {
        subjectDao.deleteSubject(subjectId);
        ResponseStructure<String> structure = new ResponseStructure<>();
        structure.setData("Subject deleted successfully");
        structure.setMessage("Deleted successfully");
        structure.setStatus(HttpStatus.OK.value());
        return new ResponseEntity<>(structure, HttpStatus.OK);
    }
}
