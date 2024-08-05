package com.launchcode.demo_treasure_chest_backend.data;

import com.launchcode.demo_treasure_chest_backend.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
    User findByEmail(String email);
}
