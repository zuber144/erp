package com.sgp.erp.exception;

public class DataNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;

    @Override
    public String getMessage() {
        return "Data not found";
    }
}
