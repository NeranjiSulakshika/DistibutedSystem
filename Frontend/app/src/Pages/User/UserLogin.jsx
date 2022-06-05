import React, { Component } from "react";
import "./UserLogin.css";
import { imagePath } from "../../Services";
import axios from "axios";
import { userLoginURL } from "../../Services/endpoints";
import Swal from "sweetalert2";



import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
    };
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRoleSelect = (e) => {
  e.preventDefault();
   console.log(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    axios.post(userLoginURL, data, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((res) => {
      console.log(res);
      if (res.data === "UNAUTHORIZED") {
        window.location = "/userLogin";
      } else {
        console.log("role = > "+res.data.roles[0]);
        localStorage.setItem("role", res.data.roles[0])
        Swal.fire({
          icon: "success",
          title: "Login Successful!!",
        }).then(() => {
          localStorage.setItem("name", res.data.username);
          localStorage.setItem("id", res.data.id)
          // check the role and redirect to the page
          if(res.data.roles[0] === "ROLE_ADMIN"){
            window.location = "/appointmentList"
          }else if (res.data.roles[0] === "ROLE_DOCTOR"){
            window.location = "/about"
          }else if(res.data.roles[0] === "ROLE_PATIENT"){
            window.location = "/about"
          }else{
            console.log("cant find role =>" + res.data.roles[0])
          }

        });
      }
    });
  };

  render() {
    return (
      <div className="UserLogin">
        <div className="d-flex justify-content-center">
          <img src={imagePath + `logo.png`} alt="" className="logo-login" />
        </div>
        <div className="User-Login-Heading-Container">                                  
          <div className="row">

            <h3 className="Login-User-Heading">User Login</h3>
          </div>
          
        </div>
        <div className="User-Login-Body-Container">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4 row">
              <label className="col-sm-10 col-form-label">Username :</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-10 col-form-label">Password :</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LoginRow">
              <button type="submit" className="User-Button-Login">
                Login
              </button>
              <Link className="RegLink" to="/addUser">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
