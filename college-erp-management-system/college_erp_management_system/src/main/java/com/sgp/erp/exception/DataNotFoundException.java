package com.sgp.erp.exception;

public class DataNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public DataNotFoundException() {
    }

    public DataNotFoundException(String message) {
        super(message);
    }

    @Override
    public String getMessage() {
        return "Data not found";
    }
}
