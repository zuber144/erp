package com.sgp.erp.exception;

public class DataNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;

    public String getMessage() {
        return "Data not found";
    }
}
