package com.launchcode.demo_treasure_chest_backend.controllers;

import com.launchcode.demo_treasure_chest_backend.data.MemoryRepository;
import com.launchcode.demo_treasure_chest_backend.models.Memory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memories")
@CrossOrigin(origins = "http://localhost:5173")
public class MemoryController {


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
        public Memory createMemory(@RequestParam String description, @RequestParam String title){
            Memory newMemory = new Memory();
            newMemory.setDescription(description);
            newMemory.setTitle(title);
            return memoryRepository.save(newMemory);
        }

}
