package com.launchcode.demo_treasure_chest_backend.data;

import com.launchcode.demo_treasure_chest_backend.models.MemoryImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoryImageRepository extends JpaRepository<MemoryImage, Long> {
}
