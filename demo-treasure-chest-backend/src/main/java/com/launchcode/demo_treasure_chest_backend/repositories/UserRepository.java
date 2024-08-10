package com.launchcode.demo_treasure_chest_backend.repositories;

import com.launchcode.demo_treasure_chest_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
