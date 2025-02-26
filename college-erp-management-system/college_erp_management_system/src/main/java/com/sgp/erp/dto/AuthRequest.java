package com.sgp.erp.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class AuthRequest {
    private String username;
    private String password;

    // Default Constructor
    public AuthRequest() {
    }

    // Parameterized Constructor
    public AuthRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters & Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
