package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, String> {
}
