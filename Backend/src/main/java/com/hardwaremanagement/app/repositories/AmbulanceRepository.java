package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Ambulance;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AmbulanceRepository extends MongoRepository<Ambulance, String> {
}
