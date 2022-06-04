import React, { Component } from "react";
import "./AttendantList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { attendentURL  } from "../../Services/endpoints";
import { deleteattentdentURL } from "../../Services/endpoints";
import { Redirect, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class AttendantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      workingWard: "",
      contactNo: "",
      attendents: [],
      redirect: false,
    };
  }

  async componentDidMount() {
    await axios.get(attendentURL).then((result) => {
      this.setState({
        attendents: result.data,
      });
    });
  }

  async delete(attendantId) {
    await axios.delete(deleteattentdentURL+"/"+attendantId).then((res) => {
      console.error("Response Data => "+res.data);
      console.log(deleteattentdentURL+"/"+attendantId);
    });
  };



  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createAttendant" />;
    }
  };
  render() {
    const { attendents } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Attendant Management" />
          <div className="ItemRow text-end">
            {this.renderRedirect()}
            {localStorage.getItem("role")!=="ROLE_ADMIN"? null :<button
              type="submit"
              className="Item-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Attendant
            </button>}
          </div>
          <div className="row">
            <table className="table table-bordered  Inventory" id="myTable">
              <tr className="InventoryListItems">
                <th className="ps-4">Attendant Id</th>
                <th className="ps-4">Firstname</th>
                <th className="ps-4">lastname</th>
                <th className="ps-4">Working Ward</th>
                <th className="ps-4">Contact No</th>
                <th className="ps-4"></th>
              </tr>
              {attendents.map((attendent) => {
                return (
                  <tr
                    key={attendent.attendantId}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{attendent.id}</td>
                    <td className="ps-4">{attendent.firstName}</td>
                    <td className="ps-4">{attendent.lastName}</td>
                    <td className="ps-4">{attendent.workingWard}</td>
                    <td className="ps-4">{attendent.contactNo}</td>
                    {/* <td className="ps-4">{item.quantity}</td> */}
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("attendentId", attendent.attendantId);
                          window.location = "/updateAttendent";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(attendent.attendantId)}
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
