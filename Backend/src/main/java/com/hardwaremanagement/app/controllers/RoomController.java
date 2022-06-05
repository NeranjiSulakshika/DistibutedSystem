package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Room;
import com.hardwaremanagement.app.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/auth/room")
public class RoomController {


    @Autowired
    private RoomRepository roomRepository;

    @PostMapping("add")
    public String addRoom(@RequestBody Room room){
        roomRepository.save(room);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Room> getAllRooms(){
        return roomRepository.findAll();
    }

    @GetMapping("getById/{id}")
    public Optional<Room> getRooms(@PathVariable("id") String id){
        return roomRepository.findById(id);
    }

    @PutMapping("update")
    public String updateRoom(@RequestBody Room room){
        roomRepository.save(room);
        return "Updated Successfully";
    }

    @DeleteMapping("delete/{id}")
    public String deleteRoom(@PathVariable("id") String id){
        roomRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
