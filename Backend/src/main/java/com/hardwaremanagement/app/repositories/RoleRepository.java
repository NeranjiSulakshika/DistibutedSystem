package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.ERole;
import com.hardwaremanagement.app.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
