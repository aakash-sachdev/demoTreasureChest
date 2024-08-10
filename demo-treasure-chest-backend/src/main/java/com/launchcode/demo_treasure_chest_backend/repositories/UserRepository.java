package com.launchcode.demo_treasure_chest_backend.repositories;

import com.launchcode.demo_treasure_chest_backend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}