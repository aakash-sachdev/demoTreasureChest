package com.launchcode.demo_treasure_chest_backend.controllers;

import com.launchcode.demo_treasure_chest_backend.data.UserRepository;
import com.launchcode.demo_treasure_chest_backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // View all Users
    @GetMapping("/all")
    public List<User> getAllUsers(){
        return (List<User>) userRepository.findAll();
    }

    // Create new User with RequestBody
    @PostMapping("/registration")
    public User newUser(@RequestBody User newUser) {
        try {
            System.out.println("Creating user: " + newUser);
            return userRepository.save(newUser);
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to create user", e);
        }
    }

    // Create new User with RequestParams
//    @PostMapping("/registration/params")
//    public User newUserWithParams(@RequestParam String username, @RequestParam String password, @RequestParam String email){
//        User newUser = new User(username, password, email);
//        return userRepository.save(newUser);
//    }

    // Delete User
    @PostMapping("/delete")
    public void deleteUser(@RequestParam Integer userId){
        userRepository.deleteById(userId);
    }

    // Edit User (method implementation needed)
}

