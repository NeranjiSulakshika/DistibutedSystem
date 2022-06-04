import React, { Component } from "react";
import "./RoomList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { roomURL } from "../../Services/endpoints";
import { deleteroomURL} from "../../Services/endpoints";
import { Redirect, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomNo: "",
      roomType: "",
      roomAvailability: "",
      roomPrice: 0,
      rooms: [],
      redirect: false,
    };
  }

  async componentDidMount() {
    await axios.get(roomURL, {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem("AmToken")+'', 
        'Accept': 'application/json'
      }
    }).then((result) => {
      this.setState({
        rooms: result.data,
      });
    });
  }

  async delete(roomNo) {
    await axios.delete(deleteroomURL+"/"+roomNo).then((res) => {
      console.error("Response Data => "+res.data);
      console.log(deleteroomURL+"/"+roomNo);
    });
  };


  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createRoom" />;
    }
  };
  render() {
    const { rooms } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Room Management" />
          <div className="ItemRow text-end">
            {this.renderRedirect()}
            {localStorage.getItem("role")!=="ROLE_ADMIN"? null :<button
              type="submit"
              className="Item-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Room
            </button>}
          </div>
          <div className="row">
            <table className="table table-bordered  Inventory" id="myTable">
              <tr className="InventoryListItems">
                <th className="ps-4">Room no</th>
                <th className="ps-4">Type</th>
                <th className="ps-4">Availability</th>
                <th className="ps-4">Price</th>
                <th className="ps-4"></th>
              </tr>
              {rooms.map((room) => {
                return (
                  <tr
                    key={room.roomNo}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{room.roomNo}</td>
                    <td className="ps-4">{room.roomType}</td>
                    <td className="ps-4">{room.roomAvailability}</td>
                    <td className="ps-4">{room.roomPrice}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("roomNo", room.roomNo);
                          window.location = "/updateRoom";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(room.roomNo)}
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
