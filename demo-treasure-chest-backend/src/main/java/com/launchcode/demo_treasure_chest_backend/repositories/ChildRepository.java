package com.launchcode.demo_treasure_chest_backend.repositories;

import com.launchcode.demo_treasure_chest_backend.models.Child;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Long> {
}
