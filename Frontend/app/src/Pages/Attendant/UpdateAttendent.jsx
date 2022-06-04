import React, { Component } from "react";
import "./CreateAttendant.css";
import { faRedo, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { getattedentIDURL } from "../../Services/endpoints";
import { updateattendentURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class UpdateAttendant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      workingWard: "",
      contactNo: "",
    };
  }

  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(getattedentIDURL + id).then((result) => {
      this.setState({
        id: result.data.id,
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        workingWard: result.data.workingWard,
        contactNo: result.data.contactNo,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let invenID = localStorage.getItem("updateId");
    const data = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      workingWard: this.state.workingWard,
      contactNo: this.state.contactNo,
    };
    axios.put(updateattendentURL, data).then((res) => {
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/attendantList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset() {
    const res = {
      id: "",
      firstName: "",
      lastName: "",
      workingWard: "",
      contactNo: "",
    };
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Attendant Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Update Attendant</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Attendant Id :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="id"
                      name="id"
                      placeholder="Attendent ID"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Firstname :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Lastname :</label>
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
                <label className="col-sm-3 col-form-label">Working Ward :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="workingWard"
                    name="workingWard"
                    placeholder="Working Ward"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Contact No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    placeholder="Contact No"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="ItemRow text-end">
                <button type="submit" className="Delivery-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Attendent
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
