package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Ambulance;
import com.hardwaremanagement.app.repositories.AmbulanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/auth/ambulance/")
public class AmbulanceController {

    @Autowired
    private AmbulanceRepository ambulanceRepository;

    @PostMapping("add")
    public String addAmbulance(@RequestBody Ambulance ambulance){
        ambulanceRepository.save(ambulance);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Ambulance> getAllAmbulance(){
        return ambulanceRepository.findAll();
    }

    @GetMapping("getById")
    public Optional<Ambulance> getAmbulance(@PathVariable String id){
        return ambulanceRepository.findById(id);
    }

    @PutMapping("update")
    public String updateAmbulance(@RequestBody Ambulance ambulance){
        ambulanceRepository.save(ambulance);
        return "Updated Successfully";
    }

    @DeleteMapping("delete/{id}")
    public String deleteAmbulance(@PathVariable("id") String id){
        ambulanceRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
