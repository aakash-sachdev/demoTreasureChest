package com.launchcode.demo_treasure_chest_backend.controllers;

import com.launchcode.demo_treasure_chest_backend.models.Memory;
import com.launchcode.demo_treasure_chest_backend.models.User;
import com.launchcode.demo_treasure_chest_backend.repositories.MemoryRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/memories")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class MemoryController {

        private static final String UPLOAD_DIR ="src/main/resources/static/uploads/";

        @Autowired
        MemoryRepository memoryRepository;

        @Autowired
        private UserController userController;

        @GetMapping
        public ResponseEntity<List<Memory>> getAllMemories(HttpSession session) {
            User user = userController.getUserFromSession(session);

            if (user != null) {
                // Fetch memories associated with the logged-in user
                List<Memory> memories = memoryRepository.findByUser(user);
                return ResponseEntity.ok(memories);
            } else {
                // Return unauthorized status if user is not found in session
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }


        @PostMapping("/delete")
        public ResponseEntity<Map<String, String>> deleteMemory(@RequestParam Long memoryId) {
            Map<String, String> responseBody = new HashMap<>();

            if (memoryRepository.existsById(memoryId)) {
                memoryRepository.deleteById(memoryId);
                responseBody.put("message", "Memory successfully deleted");
                return ResponseEntity.ok(responseBody);
            } else {
                responseBody.put("message", "Memory not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseBody);
            }
        }


        @PostMapping("/new")
        public ResponseEntity<Map<String, String>> createMemory(HttpSession session,
                                                                @RequestParam String description,
                                                                @RequestParam String title,
                                                                @RequestParam("file") MultipartFile file) throws IOException {

            // Fetch the user from the session
            User user = userController.getUserFromSession(session);
            Map<String, String> responseBody = new HashMap<>();

            // Check if user is present in the session
            if (user != null) {
                // Handle file upload
                String fileName = file.getOriginalFilename();
                Path filePath = Paths.get(UPLOAD_DIR, fileName);
                Files.createDirectories(filePath.getParent());
                Files.write(filePath, file.getBytes());

                System.out.println("File saved at: " + filePath.toAbsolutePath());

                // Create and set up the new Memory object
                Memory newMemory = new Memory(description, title, "/uploads/" + fileName, user);

                // Save the new Memory to the repository
                memoryRepository.save(newMemory);

                // Return success response
                responseBody.put("message", "Memory successfully created");
                return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
            } else {
                // Return error response if user is not found in session
                responseBody.put("message", "User not found in session");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
            }
        }

//        @GetMapping("/search")
//        public List<Memory> getMemories(@RequestParam(value = "query", required = false) String query) {
//            List<Memory> memories = memoryRepository.findAll();
//            if (query != null && !query.isEmpty()) {
//                memories = memories.stream()
//                        .filter(memory -> memory.getTitle().toLowerCase().contains(query.toLowerCase()) ||
//                                memory.getDescription().toLowerCase().contains(query.toLowerCase()))
//                        .collect(Collectors.toList());
//            }
//            return memories;
//        }

//    @PutMapping("/update/{id}")
//    public Memory updateMemoryDescription(
//            @PathVariable Long id,
//            @RequestParam String description) {
//
//        Memory memory = memoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Memory not found"));
//        memory.setDescription(description);
//        return memoryRepository.save(memory);
//    }

}
