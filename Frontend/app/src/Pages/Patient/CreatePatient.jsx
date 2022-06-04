import React, { Component } from "react";
import "./CreatePatient.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addPatientURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreatePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nic: localStorage.getItem("id"),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
    };

    const res = axios.post(addPatientURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful",
      }).then(() => {
        window.location = "/patientList";
      });
    });
  };

  reset() {
    const res = {
      nic: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    };
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Patient Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Add Patient</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">NIC :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="nic"
                      name="nic"
                      value={localStorage.getItem("id")}
                      placeholder="nic"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">First Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="FIrst Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Last Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Address :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="address"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="ItemRow text-end">
                  <button
                    type="reset"
                    className="Item-Button-Inventory-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Item-Button-Inventory-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Patient
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
