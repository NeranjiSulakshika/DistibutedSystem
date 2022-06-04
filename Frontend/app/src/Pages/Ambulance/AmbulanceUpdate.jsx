import React, { Component } from "react";
import "./AmbulanceUpdate.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import { getambulanceIDURL  } from "../../Services/endpoints";
import { updateambulanceURL } from "../../Services/endpoints";

export default class AmbulanceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNo: "",
      vehicleOwnerName: "",
      availableLocation: "",
      vehicleType: ""
    };
  }
  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(getambulanceIDURL + id, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((result) => {
      this.setState({
        vehicleNo: result.data.vehicleNo,
        vehicleOwnerName: result.data.vehicleOwnerName,
        availableLocation: result.data.availableLocation,
        vehicleType: result.data.vehicleType,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      vehicleNo: this.state.vehicleNo,
      vehicleOwnerName: this.state.vehicleOwnerName,
      availableLocation: this.state.availableLocation,
      vehicleType: this.state.vehicleType,
    };
    axios.put(updateambulanceURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/ambulanceList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UpdateDriver">
        <SideNav />
        <div className="content-layer">
          <Header topic="Ambulance Management" />
          <div className="Driver-Update-Heading-Container">
            <h3 className="Update-Driver-Heading">Update Ambulance</h3>
          </div>
          <div className="Driver-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    placeholder="vehicle No"
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
                    placeholder="Vehicle Name"
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
                    placeholder="available Location"
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
              <div className="DriverRow">
                <button type="submit" className="Driver-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Ambulance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
