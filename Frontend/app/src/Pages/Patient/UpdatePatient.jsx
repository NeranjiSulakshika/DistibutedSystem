import React, { Component } from "react";
import "./UpdatePatient.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {updatepatientURL} from "../../Services/endpoints";
import {getpatientIDURL } from "../../Services/endpoints";

export default class UpdatePatient extends Component {
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

  async componentDidMount() {
    let nic = localStorage.getItem("nic");
    await axios.get(getpatientIDURL + nic, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((result) => {
      this.setState({
        nic: result.data.nic,
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        address: result.data.address,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // let invenID = localStorage.getItem("updateId");
    const data = {
      nic: this.state.nic,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
    };
    axios.put(updatepatientURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((res) => {
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/patientList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UpdateItem">
        <SideNav />
        <div className="content-layer">
          <Header topic="Patient Management" />
          <div className="Item-Update-Heading-Container">
            <h3 className="Update-Item-Heading">Update Patient</h3>
          </div>
          <div className="Item-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">NIC :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      readOnly="true"
                      id="nic"
                      name="nic"
                      placeholder="NIC"
                      required
                      value={this.state.nic}
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
                    placeholder="John Doe"
                    required
                    value={this.state.firstName}
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
                    placeholder="John Doe"
                    required
                    value={this.state.lastName}
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
                    placeholder="abc@abc.com"
                    required
                    value={this.state.email}
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
                    placeholder="12/3 1st st"
                    required
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="ItemRow">
                <button
                  type="submit"
                  className="Item-Button-Update"
                  onClick={{}}
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
