package com.awaazai.config;

import com.awaazai.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class JwtFilterTest {

    private JwtUtil jwtUtil;
    private JwtFilter jwtFilter;

    @BeforeEach
    void setUp() {
        jwtUtil = mock(JwtUtil.class);
        jwtFilter = new JwtFilter(jwtUtil);
        SecurityContextHolder.clearContext();
    }

    @Test
    void doFilterInternalShouldSetAuthenticationForValidBearerToken() throws Exception {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpServletResponse response = java.util.Objects.requireNonNull(mock(HttpServletResponse.class), "response");
        FilterChain filterChain = java.util.Objects.requireNonNull(mock(FilterChain.class), "filterChain");

        when(request.getHeader("Authorization")).thenReturn("Bearer valid-token");
        when(jwtUtil.validateTokenAndGetSubject("valid-token")).thenReturn("alice");

        jwtFilter.doFilterInternal(request, response, filterChain);

        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertEquals("alice", SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        verify(filterChain).doFilter(request, response);
    }

    @Test
    void doFilterInternalShouldReturnUnauthorizedForInvalidToken() throws Exception {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpServletResponse response = java.util.Objects.requireNonNull(mock(HttpServletResponse.class), "response");
        FilterChain filterChain = java.util.Objects.requireNonNull(mock(FilterChain.class), "filterChain");

        when(request.getHeader("Authorization")).thenReturn("Bearer invalid-token");
        when(jwtUtil.validateTokenAndGetSubject("invalid-token")).thenThrow(new io.jsonwebtoken.JwtException("bad token"));

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(response).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        verify(filterChain, never()).doFilter(request, response);
    }
}
