package com.hardwaremanagement.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "room")
public class Room {

    @Id
    private String roomNo;
    private String roomType;
    private String roomAvailability;
    private String roomPrice;

    public Room(String roomNo, String roomType, String roomAvailability, String roomPrice) {
        this.roomNo = roomNo;
        this.roomType = roomType;
        this.roomAvailability = roomAvailability;
        this.roomPrice = roomPrice;
    }

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public String getRoomAvailability() {
        return roomAvailability;
    }

    public void setRoomAvailability(String roomAvailability) {
        this.roomAvailability = roomAvailability;
    }

    public String getRoomPrice() {
        return roomPrice;
    }

    public void setRoomPrice(String roomPrice) {
        this.roomPrice = roomPrice;
    }
}
