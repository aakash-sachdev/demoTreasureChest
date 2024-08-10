package com.launchcode.demo_treasure_chest_backend.controllers;

import com.launchcode.demo_treasure_chest_backend.models.Child;
import com.launchcode.demo_treasure_chest_backend.repositories.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/children")
@CrossOrigin(origins = "http://localhost:5173/")
public class ChildController {

    @Autowired
    private ChildRepository childRepository;

    @GetMapping
    public List<Child> getAllChildren() {
        return childRepository.findAll();
    }

    @PostMapping
    public Child createChild(@RequestBody Child child) {
        return childRepository.save(child);
    }

    @GetMapping("/{id}")
    public Child getChildById(@PathVariable Long id) {
        return childRepository.findById(id).orElseThrow(() -> new RuntimeException("Child not found"));
    }
}
