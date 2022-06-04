package com.hardwaremanagement.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ambulance")
public class Ambulance {

    @Id
    private String vehicleNo;
    private String vehicleOwnerName;
    private String availableLocation;
    private String vehicleType;

    public Ambulance(String vehicleNo, String vehicleOwnerName, String availableLocation, String vehicleType) {
        this.vehicleNo = vehicleNo;
        this.vehicleOwnerName = vehicleOwnerName;
        this.availableLocation = availableLocation;
        this.vehicleType = vehicleType;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }

    public String getVehicleOwnerName() {
        return vehicleOwnerName;
    }

    public void setVehicleOwnerName(String vehicleOwnerName) {
        this.vehicleOwnerName = vehicleOwnerName;
    }

    public String getAvailableLocation() {
        return availableLocation;
    }

    public void setAvailableLocation(String availableLocation) {
        this.availableLocation = availableLocation;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
}
