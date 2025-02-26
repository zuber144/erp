package com.sgp.erp.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class AuthResponse {
    private String token;

    public AuthResponse() {

    }

    // Constructor
    public AuthResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Setter
    public void setToken(String token) {
        this.token = token;
    }
}
