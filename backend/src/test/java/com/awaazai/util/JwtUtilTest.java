package com.awaazai.util;

import io.jsonwebtoken.JwtException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JwtUtilTest {

    private final JwtUtil jwtUtil = new JwtUtil("test-secret-key-1234567890-abcdefghijklmnopqrstuv", 60000L);

    @Test
    void generateTokenShouldCreateTokenForSubject() {
        String token = jwtUtil.generateToken("alice");

        assertNotNull(token);
        assertFalse(token.isBlank());
    }

    @Test
    void validateTokenAndGetSubjectShouldReturnSubjectForValidToken() {
        String token = jwtUtil.generateToken("alice");

        String subject = jwtUtil.validateTokenAndGetSubject(token);

        assertEquals("alice", subject);
    }

    @Test
    void validateTokenAndGetSubjectShouldThrowForInvalidToken() {
        assertThrows(JwtException.class, () -> jwtUtil.validateTokenAndGetSubject("not-a-valid-token"));
    }
}
