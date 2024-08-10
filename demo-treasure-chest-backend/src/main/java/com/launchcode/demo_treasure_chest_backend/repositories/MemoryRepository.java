package com.launchcode.demo_treasure_chest_backend.repositories;

import com.launchcode.demo_treasure_chest_backend.models.Memory;
import com.launchcode.demo_treasure_chest_backend.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MemoryRepository extends CrudRepository<Memory, Long> {
    List<Memory> findByUser(User user);
}
