import React, { Component } from "react";
import "./PatientList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { patientURL } from "../../Services/endpoints";
import {deletepaitientURL } from "../../Services/endpoints";
import { Redirect, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic: "",
      firstName: "",
      lastName: "",
      email: 0,
      address: "",
      patients: [],
      redirect: false,
    };
  }

  async componentDidMount() {
    await axios.get(patientURL).then((result) => {
      this.setState({
        patients: result.data,
      });
    });
  }

  async delete(nic) {
    await axios.delete(deletepaitientURL+"/"+nic).then((res) => {
      console.error("Response Data => "+res.data);
      console.log(deletepaitientURL+"/"+nic);
    });
  };



  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createPatient" />;
    }
  };
  render() {
    const { patients } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Patient Management" />
          <div className="ItemRow text-end">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Item-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Patient
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  Inventory" id="myTable">
              <tr className="InventoryListItems">
                <th className="ps-4">NIC</th>
                <th className="ps-4">First name</th>
                <th className="ps-4">last Name</th>
                <th className="ps-4">Email</th>
                <th className="ps-4">Address</th>
                <th className="ps-4"></th>
              </tr>
              {patients.map((patient) => {
                return (
                  <tr
                    key={patient.nic}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{patient.nic}</td>
                    <td className="ps-4">{patient.firstName}</td>
                    <td className="ps-4">{patient.lastName}</td>
                    <td className="ps-4">{patient.email}</td>
                    <td className="ps-4">{patient.address}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("nic", patient.nic);
                          window.location = "/updatePatient";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(patient.nic)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
