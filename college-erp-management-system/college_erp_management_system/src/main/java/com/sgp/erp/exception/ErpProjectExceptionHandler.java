package com.sgp.erp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.sgp.erp.dto.ResponseStructure;

@RestControllerAdvice()
public class ErpProjectExceptionHandler extends ResponseEntityExceptionHandler {

    // @ExceptionHandler(DataNotFoundException.class)
    // public ResponseEntity<ResponseStructure<String>>
    // handleDNFE(DataNotFoundException ex) {
    // ResponseStructure<String> structure = new ResponseStructure<>();
    // structure.setData(null);
    // structure.setMessage(ex.getMessage());
    // structure.setStatus(HttpStatus.NOT_FOUND.value());
    // return new ResponseEntity<>(structure, HttpStatus.NOT_FOUND);
    // }

    @ExceptionHandler({ StudentNotFoundException.class, DataNotFoundException.class })
    public ResponseEntity<ResponseStructure<String>> handleSNFE(StudentNotFoundException ex) {
        ResponseStructure<String> structure = new ResponseStructure<>();
        structure.setData(null);
        structure.setMessage(ex.getMessage());
        structure.setStatus(HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(structure, HttpStatus.NOT_FOUND);
    }
}
