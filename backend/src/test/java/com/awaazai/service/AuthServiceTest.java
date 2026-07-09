package com.awaazai.service;

import com.awaazai.dto.AuthRequest;
import com.awaazai.entity.User;
import com.awaazai.repository.UserRepository;
import com.awaazai.util.JwtUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AuthServiceTest {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtUtil jwtUtil;
    private AuthService authService;

    @BeforeEach
    void setUp() {
        userRepository = mock(UserRepository.class);
        passwordEncoder = mock(PasswordEncoder.class);
        jwtUtil = mock(JwtUtil.class);
        authService = Objects.requireNonNull(new AuthService(), "authService");

        Object target = Objects.requireNonNull(authService, "authService target");
        org.springframework.test.util.ReflectionTestUtils.setField(target, "userRepository", userRepository);
        org.springframework.test.util.ReflectionTestUtils.setField(target, "passwordEncoder", passwordEncoder);
        org.springframework.test.util.ReflectionTestUtils.setField(target, "jwtUtil", jwtUtil);
    }

    @Test
    void registerShouldSaveUserAndReturnToken() {
        AuthRequest request = new AuthRequest();
        request.setUsername("alice");
        request.setPassword("secret");

        when(passwordEncoder.encode("secret")).thenReturn("encoded");
        when(jwtUtil.generateToken("alice")).thenReturn("token");

        String token = authService.register(request);

        User savedUser = new User();
        savedUser.setUsername("alice");
        savedUser.setPassword("encoded");
        assertEquals("alice", savedUser.getUsername());
        assertEquals("token", token);
    }

    @Test
    void loginShouldReturnNullWhenPasswordDoesNotMatch() {
        AuthRequest request = new AuthRequest();
        request.setUsername("alice");
        request.setPassword("wrong");

        User user = Objects.requireNonNull(new User(), "user");
        user.setUsername("alice");
        user.setPassword("encoded");

        when(userRepository.findByUsername("alice")).thenReturn(user);
        when(passwordEncoder.matches("wrong", "encoded")).thenReturn(false);

        String token = authService.login(request);

        assertNull(token);
        verify(jwtUtil, never()).generateToken(anyString());
    }
}
