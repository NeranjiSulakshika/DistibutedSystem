import React, { Component } from "react";
import "./AmbulanceCreate.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { addambulanceURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class AmbulanceCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNo: "",
      vehicleOwnerName: "",
      availableLocation: "",
      vehicleType: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      vehicleNo: this.state.vehicleNo,
      vehicleOwnerName: this.state.vehicleOwnerName,
      availableLocation: this.state.availableLocation,
      vehicleType: this.state.vehicleType,
    };
    const res = axios.post(addambulanceURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/ambulanceList";
      });
    });
  };

  reset() {
    const res = {
      vehicleNo: "",
      vehicleOwnerName: "",
      availableLocation: "",
      vehicleType: ""
    };
  }

  render() {
    return (
      <div className="CreateDriver">
        <SideNav />
        <div className="content-layer">
          {/* <Header topic="Ambulance Management" /> */}
          <div className="Driver-Create-Heading-Container">
            <h3 className="Add-Driver-Heading">Add Ambulance</h3>
          </div>
          <div className="Driver-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    placeholder="Vehicle No"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Owner Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleOwnerName"
                    name="vehicleOwnerName"
                    placeholder="Vehicle Owner Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Avaialble Location :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="availableLocation"
                    name="availableLocation"
                    placeholder="Available Location"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle Type :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    placeholder="Vehicle Type"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DriverRow text-end">
                <button
                  type="reset"
                  className="Driver-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="Driver-Button-Add">
                  <FontAwesomeIcon icon={faPlus} /> Add Ambulance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
