package com.launchcode.demo_treasure_chest_backend.data;

import com.launchcode.demo_treasure_chest_backend.models.Memory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoryRepository extends JpaRepository<Memory, Long> {
}
