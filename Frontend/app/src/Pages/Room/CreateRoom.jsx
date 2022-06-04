import React, { Component } from "react";
import "./CreateRoom.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addroomURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomNo: "",
      roomType: "",
      roomAvailability: "",
      roomPrice: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      roomNo: this.state.roomNo,
      roomType: this.state.roomType,
      roomAvailability: this.state.roomAvailability,
      roomPrice: this.state.roomPrice,
    };

    const res = axios.post(addroomURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful",
      }).then(() => {
        window.location = "/roomList";
      });
    });
  };

  reset() {
    const res = {
      roomNo: "",
      roomType: "",
      roomAvailability: "",
      roomPrice: "",
    };
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Room Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Add Room</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Room no :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="roomNo"
                      name="roomNo"
                      placeholder="Room No"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Type :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="roomType"
                    name="roomType"
                    placeholder="Type"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Availability :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="roomAvailability"
                    name="roomAvailability"
                    placeholder="Availability"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Price :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="number"
                    id="roomPrice"
                    name="roomPrice"
                    placeholder="price"
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
                    <FontAwesomeIcon icon={faPlus} /> Add Room
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
