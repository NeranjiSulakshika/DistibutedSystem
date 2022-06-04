import React, { Component } from "react";
import "./UpdateDoctor.css";
import { faRedo, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { updateDoctorURL } from "../../Services/endpoints";
import { getdoctorIDURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class UpdateDoctor extends Component {
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

 

  async componentDidMount() {
    let doctorId = localStorage.getItem("updateId");
    await axios.get(getdoctorIDURL + doctorId, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((result) => {
      this.setState({
        doctorId: result.data.doctorId,
        doctorName: result.data.doctorName,
        specialization: result.data.specialization,
        mobileNo: result.data.mobileNo,
        location: result.data.location,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // let doctorId = localStorage.getItem("updateId");
    const data = {
      doctorId: this.state.doctorId,
      doctorName: this.state.doctorName,
      specialization: this.state.specialization,
      mobileNo: this.state.mobileNo,
      location: this.state.location,
    };
    axios.put(updateDoctorURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/doctorList";
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Doctor Management" />
          <div className="CreateOrder">
            <div className="Order-Create-Heading-Container">
              <h3 className="Add-Order-Heading">Update Doctor</h3>
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
                      value={this.state.doctorId}
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
                      value={this.state.doctorName}
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
                      value={this.state.specialization}
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
                      value={this.state.mobileNo}
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
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                
                <div className="OrderRow text-end">
                <button type="submit" className="Delivery-Button-Update-ud">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Doctor
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
