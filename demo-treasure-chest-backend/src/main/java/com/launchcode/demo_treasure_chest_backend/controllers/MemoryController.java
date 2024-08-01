package com.launchcode.demo_treasure_chest_backend.controllers;

import com.launchcode.demo_treasure_chest_backend.data.MemoryRepository;
import com.launchcode.demo_treasure_chest_backend.models.Memory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/memories")
@CrossOrigin(origins = "http://localhost:5173/")
public class MemoryController {

        private static final String UPLOAD_DIR ="src/main/resources/static/uploads/";

        @Autowired
        private MemoryRepository memoryRepository;

        @GetMapping
        public List<Memory> getAllMemories(){
            return memoryRepository.findAll();
        }

        @PostMapping("/delete")
        public void deleteMemory(@RequestParam Long memoryId) {
            memoryRepository.deleteById(memoryId);
        }

        @PostMapping("/new")
        public Memory createMemory(
                @RequestParam String description,
                @RequestParam String title,
                @RequestParam("file") MultipartFile file) throws IOException {

            String fileName = file.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR, fileName);
            Files.createDirectories(filePath.getParent());
            Files.write(filePath, file.getBytes());

            System.out.println("File saved at: " + filePath.toAbsolutePath());


            Memory newMemory = new Memory(description, title, "/uploads/" + fileName);
            return memoryRepository.save(newMemory);
        }
}
