package com.awaazai.service;

import com.awaazai.dto.AuthRequest;
import com.awaazai.entity.User;
import com.awaazai.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awaazai.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public String register(AuthRequest req) {
        User u = new User();
        u.setUsername(req.getUsername());
        u.setPassword(passwordEncoder.encode(req.getPassword()));
        u.setEmail(req.getUsername());
        userRepository.save(u);
        return jwtUtil.generateToken(u.getUsername());
    }

    public String login(AuthRequest req) {
        User u = userRepository.findByUsername(req.getUsername());
        if (u == null) return null;
        if (!passwordEncoder.matches(req.getPassword(), u.getPassword())) return null;
        return jwtUtil.generateToken(u.getUsername());
    }
}
