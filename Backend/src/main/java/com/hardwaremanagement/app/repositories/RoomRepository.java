package com.hardwaremanagement.app.repositories;

import com.hardwaremanagement.app.models.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {
}
