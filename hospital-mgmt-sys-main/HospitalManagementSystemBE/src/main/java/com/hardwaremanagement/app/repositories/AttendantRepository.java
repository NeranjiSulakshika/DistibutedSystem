package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Attendant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AttendantRepository extends MongoRepository<Attendant, String > {
}
