package com.launchcode.demo_treasure_chest_backend.repositories;

import com.launchcode.demo_treasure_chest_backend.models.Memory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MemoryRepository extends JpaRepository<Memory, Long> {
    List<Memory> findByChildId(Long childId);
}
