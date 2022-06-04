package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
}
