package com.awaazai.controller;

import com.awaazai.dto.AuthRequest;
import com.awaazai.dto.AuthResponse;
import com.awaazai.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest body) {
        String token = authService.login(body);
        if (token == null) return ResponseEntity.status(401).build();
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest body) {
        String token = authService.register(body);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
