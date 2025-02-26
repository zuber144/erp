package com.sgp.erp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgp.erp.config.JwtUtil;
import com.sgp.erp.dto.AuthRequest;
import com.sgp.erp.dto.AuthResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthRequest request) {
		System.out.println("Login API hit! Username: " + request.getUsername());
		try {
			System.out.println("Attempting authentication...");
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
			System.out.println("Authentication successful!");

			String token = jwtUtil.generateToken(request.getUsername());
			System.out.println("Generated Token: " + token);

			return ResponseEntity.ok(new AuthResponse(token));
		} catch (Exception e) {
			System.out.println("Authentication failed: " + e.getMessage());
			return ResponseEntity.status(401).body("Invalid credentials");
		}
	}
}