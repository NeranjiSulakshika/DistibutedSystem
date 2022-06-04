package com.hardwaremanagement.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "attendant")
public class Attendant {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String workingWard;
    private String contactNo;

    public Attendant(String id, String firstName, String lastName, String workingWard, String contactNo) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.workingWard = workingWard;
        this.contactNo = contactNo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getWorkingWard() {
        return workingWard;
    }

    public void setWorkingWard(String workingWard) {
        this.workingWard = workingWard;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }
}
