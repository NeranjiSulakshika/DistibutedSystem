package com.hardwaremanagement.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointment")
public class Appointment {

    @Id
    private String appointmentId;
    private String patientId;
    private String startTime;
    private String endTimel;

    public Appointment(String appointmentId, String patientId, String startTime, String endTimel) {
        this.appointmentId = appointmentId;
        this.patientId = patientId;
        this.startTime = startTime;
        this.endTimel = endTimel;
    }

    public String getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTimel() {
        return endTimel;
    }

    public void setEndTimel(String endTimel) {
        this.endTimel = endTimel;
    }
}
