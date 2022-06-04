import React, { Component } from "react";
import "./UpdateAppointment.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {updateapointmentURL} from "../../Services/endpoints";
import {getapointmentIDURL} from "../../Services/endpoints";

export default class UpdateAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentId: "",
      patientId: "",
      startTime: "",
      endTimel: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    let appointmentId = localStorage.getItem("updateId");
    await axios.get(getapointmentIDURL + appointmentId, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((result) => {
      this.setState({
        appointmentId: result.data.appointmentId,
        patientId: result.data.patientId,
        startTime: result.data.startTime,
        endTimel: result.data.endTimel,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let appointmentId = localStorage.getItem("updateId");
    const data = {
      appointmentId: this.state.appointmentId,
      patientId: this.state.patientId,
      startTime: this.state.startTime,
      endTimel: this.state.endTimel,
    };

    axios.put(updateapointmentURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/appointmentList";
      });
    });
  };

  render() {
    return (
      <div className="UpdateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Appointment Management" />
          <div className="Delivery-Update-Heading-Container">
            <h3 className="Update-Delivery-Heading">Update Appointment</h3>
          </div>
          <div className="Delivery-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Appointment ID. :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="appointmentId"
                    name="appointmentId"
                    placeholder="AppointmentId"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Patient ID :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="patientId"
                    name="patientId"
                    placeholder="PatientId"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Start Time :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="time"
                    id="startTime"
                    name="startTime"
                    placeholder="Start Time"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">End Time :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="time"
                    id="endTimel"
                    name="endTimel"
                    placeholder="End Time"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow">
                <button type="submit" className="Delivery-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
