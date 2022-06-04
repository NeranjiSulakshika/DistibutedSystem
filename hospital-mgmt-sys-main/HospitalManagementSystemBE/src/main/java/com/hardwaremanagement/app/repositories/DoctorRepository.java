package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorRepository extends MongoRepository<Doctor, String> {
}
