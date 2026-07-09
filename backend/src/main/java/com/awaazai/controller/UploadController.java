package com.awaazai.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("/api/documents")
public class UploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest().body("no file");
        }

        try {
            Path uploadDir = Paths.get(System.getProperty("upload.dir", "uploads"));
            Files.createDirectories(uploadDir);

            Path target = uploadDir.resolve(file.getOriginalFilename() == null ? "upload.bin" : file.getOriginalFilename());
            Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

            return ResponseEntity.ok("uploaded:" + target.getFileName());
        } catch (IOException ex) {
            return ResponseEntity.internalServerError().body("upload failed");
        }
    }
}
