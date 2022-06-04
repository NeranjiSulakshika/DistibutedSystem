import React, { Component } from "react";
import "./AddUser.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { addUserURL } from "../../Services/endpoints";
import Swal from "sweetalert2";


export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      email: "",
      password: "",
      roles: ["patient"]
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(data);
    const res = axios.post(addUserURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/";
      });
    });
  };

  reset() {
    const res = {
      id: "",
      username: "",
      email: "",
      password: "",
     
    };
  }

  render() {
    return (
      <div className="AddUser">
       
        <div className="content-layer">
          
          <div className="User-Create-Heading-Container">
            <h3 className="Register-User-Heading">Add User</h3>
          </div>
          <div className="User-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">NIC No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="id"
                    name="id"
                    placeholder="951234567V"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="John Doe"
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
                    placeholder="abc@abc.com"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Password :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DriverRow text-end">
                <button
                  type="reset"
                  className="User-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="User-Button-Add">
                  <FontAwesomeIcon icon={faPlus} />
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
