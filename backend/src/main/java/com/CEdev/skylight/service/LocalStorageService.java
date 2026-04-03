package com.CEdev.skylight.service;

import com.CEdev.skylight.exception.OurException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class LocalStorageService {

    private final String uploadDir = "../frontend/public/images/";

    public String saveImageLocally(MultipartFile photo) {
        try {
            // Create the directory if it doesn't exist
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Save the file locally
            Path filePath = Paths.get(uploadDir + photo.getOriginalFilename());
            Files.write(filePath, photo.getBytes());
            return photo.getOriginalFilename();
        } catch (IOException e) {
            e.printStackTrace();
            throw new OurException("Unable to upload image locally: " + e.getMessage());
        }
    }
}