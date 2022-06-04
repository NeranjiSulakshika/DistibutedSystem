import React, { Component } from "react";
import "./CreateDoctor.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { adddoctorURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    doctorId: "",
    doctorName: "",
    specialization: "",
    mobileNo: "",
    location: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      doctorId: this.state.doctorId,
      doctorName: this.state.doctorName,
      specialization: this.state.specialization,
      mobileNo: this.state.mobileNo,
      location: this.state.location,
    };

    const res = axios.post(adddoctorURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!!",
      }).then(() => {
        window.location = "//doctorList";
      });
    });
  };


  reset() {
    const res = {
      doctorId: "",
      doctorName: "",
      specialization: "",
      mobileNo: "",
      location: "",
    };
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Doctor Management" />
          <div className="CreateOrder">
            <div className="Order-Create-Heading-Container">
              <h3 className="Add-Order-Heading">Add Doctor</h3>
            </div>
            <div className="Order-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Doctor ID :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="doctorId"
                      name="doctorId"
                      placeholder="Doctor ID"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Name :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="doctorName"
                      name="doctorName"
                      placeholder="Name"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Specialization :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      name="specialization"
                      type="text"
                      placeholder="Specialization"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Mobile :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="mobileNo"
                      name="mobileNo"
                      placeholder="Mobile"
                      
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Location :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Location"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                
                <div className="OrderRow text-end">
                  <button
                    type="reset"
                    className="Order-Button-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Order-Button-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Doctor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
