package com.awaazai.controller;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class UploadControllerTest {

    private Path uploadDir;
    private UploadController controller;

    @BeforeEach
    void setUp() throws IOException {
        uploadDir = Files.createTempDirectory("uploads-test");
        System.setProperty("upload.dir", uploadDir.toString());
        controller = new UploadController();
    }

    @AfterEach
    void tearDown() throws IOException {
        System.clearProperty("upload.dir");
        if (Files.exists(uploadDir)) {
            Files.walk(uploadDir)
                    .sorted((a, b) -> b.compareTo(a))
                    .forEach(path -> {
                        try {
                            Files.deleteIfExists(path);
                        } catch (IOException e) {
                            throw new RuntimeException(e);
                        }
                    });
        }
    }

    @Test
    void uploadShouldReturnBadRequestWhenFileIsEmpty() {
        MultipartFile file = mock(MultipartFile.class);
        when(file.isEmpty()).thenReturn(true);

        ResponseEntity<String> response = controller.upload(file);

        assertEquals(400, response.getStatusCode().value());
        assertEquals("no file", response.getBody());
    }

    @Test
    void uploadShouldStoreFileAndReturnSuccess() throws IOException {
        MockMultipartFile file = new MockMultipartFile("file", "sample.txt", "text/plain", "hello world".getBytes());

        ResponseEntity<String> response = controller.upload(file);

        assertEquals(200, response.getStatusCode().value());
        String body = response.getBody();
        assertTrue(body != null && body.startsWith("uploaded:"));
        assertTrue(Files.exists(uploadDir.resolve("sample.txt")));
        assertEquals("hello world", Files.readString(uploadDir.resolve("sample.txt")));
    }
}
