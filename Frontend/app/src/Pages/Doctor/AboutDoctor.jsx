import React, { Component } from "react";
import { faRedo, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { getdoctorIDURL, updatepatientURL } from "../../Services/endpoints"; 
import { getpatientIDURL } from "../../Services/endpoints"; 
import { updateDoctorURL } from "../../Services/endpoints"; 
import SideNav from "../../Components/SideNav/SideNav";

export default class AboutDoctor extends Component {

  state = {
    user : [],
    id : "",
    name: "",
    sps: "",
    pNo: "",
    location: "",
    nic: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    userRole: localStorage.getItem("role")
   
  }

  onNameChanged(value){
    this.setState({
      name : value
    })
  }
  onSpsChanged(value){
    this.setState({
      sps : value
    })
  }
  onPNoChanged(value){
    this.setState({
      pNo : value
    })
  }
  onLocationChanged(value){
    this.setState({
      location : value
    })
  }

    
  async componentDidMount() {
    console.log("userID =>"+localStorage.getItem("id"))
    if(localStorage.getItem("role")==="ROLE_DOCTOR"){
      await axios.get(getdoctorIDURL+"/"+localStorage.getItem("id")).then((result) => {
        this.setState({
          id: result.data.doctorId,
          name: result.data.doctorName,
          sps: result.data.specialization,
          pNo: result.data.mobileNo,
          location: result.data.location,
        });
      });
    }else if(localStorage.getItem("role")==="ROLE_PATIENT"){
      await axios.get(getpatientIDURL+"/"+localStorage.getItem("id")).then((result) => {
        this.setState({
          nic: result.data.nic,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          email: result.data.email,
          address: result.data.address
        });
      });
    }
  }

  handleSubmit= (e) =>{
    e.preventDefault();
    const doctorData = {
      doctorId: this.state.id,
      doctorName: this.state.name,
      specialization: this.state.sps,
      mobileNo: this.state.pNo,
      location: this.state.location,
    };

    const patientData = {
      nic: this.state.nic,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address
    }

    if(localStorage.getItem("role")==="ROLE_DOCTOR"){
      axios.put(updateDoctorURL, doctorData).then(() => {
        Swal.fire({
          icon: "success",
          title: "Update Successful!!!",
        }).then(() => {
          window.location = "/doctorList";
        });
      });
    }else if(localStorage.getItem("role")==="ROLE_PATIENT"){
      axios.put(updatepatientURL, patientData).then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Update Successful!!!",
        }).then(() => {
          window.location = "/patientList";
        });
      });
    }
  }

    render () {
      const { user } = this.state;
        return (
            <div>
              <SideNav/>
               <div className="content-layer">
             
            <div className="CreateOrder">
                <div className="Order-Create-Heading-Container">
                  {this.state.userRole === "ROLE_DOCTOR"?
                <h3 className="Add-Order-Heading">Doctor Profile</h3> 
                : <h3 className="Add-Order-Heading">Patient Profile</h3> 
              }
                </div>
                <div className="Order-Create-Body-Container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 row">
                    {this.state.userRole === "ROLE_DOCTOR"? <label className="col-sm-3 col-form-label">Doctor ID :</label> : <label className="col-sm-3 col-form-label">N.I.C :</label>}
                    <div className="ui fluid col-sm-9">
                        <input
                        className="form-control"
                       value={ this.state.userRole === "ROLE_DOCTOR"? this.state.id : this.state.nic}
                        type="text"
                        id="doctorId"
                        name="doctorId"
                        placeholder="Doctor ID"
                        required
                        />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    {this.state.userRole === "ROLE_DOCTOR"?<label className="col-sm-3 col-form-label">
                        Name :
                    </label>: <label className="col-sm-3 col-form-label">
                        First Name :
                    </label>}
                    <div className="col-sm-9">
                        <input
                        className="form-control"
                     
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        placeholder="Name"
                        value={this.state.userRole === "ROLE_DOCTOR"? this.state.name : this.state.firstName}
                        required
                        onChange={ localStorage.getItem("role") ==="ROLE_DOCTOR"? e => this.onNameChanged(e.target.value): null}
                        />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    { this.state.userRole === "ROLE_DOCTOR"? <label className="col-sm-3 col-form-label">Specialization :</label>
                      : <label className="col-sm-3 col-form-label">Last Name :</label>
                    }
                    <div className="ui fluid col-sm-9">
                        <input
                        className="form-control"
                      
                        name="specialization"
                        type="text"
                        value={this.state.userRole === "ROLE_DOCTOR"? this.state.sps : this.state.lastName}

                        placeholder="Specialization"
                        onChange={localStorage.getItem("role") ==="ROLE_DOCTOR"? e => this.onSpsChanged(e.target.value): null}
                        />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    {this.state.userRole === "ROLE_DOCTOR"? <label className="col-sm-3 col-form-label">
                        Mobile :
                    </label> : <label className="col-sm-3 col-form-label">
                        Email :
                    </label>}
                    <div className="col-sm-9">
                        <input
                        className="form-control"
                        type="text"
                        id="mobileNo"
                        name="mobileNo"
                        placeholder="Mobile"
                        value={this.state.userRole === "ROLE_DOCTOR"? this.state.pNo : this.state.email}
                        required
                        onChange={localStorage.getItem("role") ==="ROLE_DOCTOR"? e => this.onPNoChanged(e.target.value): null}
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
                        value={this.state.userRole === "ROLE_DOCTOR"?  this.state.location : this.state.address}
                        onChange={ localStorage.getItem("role") ==="ROLE_DOCTOR"? e => this.onLocationChanged(e.target.value):null}
                        />
                    </div>
                    </div>
                    
                    <div className="OrderRow text-end">
                    {this.state.userRole === "ROLE_DOCTOR"? <button type="submit" className="Delivery-Button-Update-ud" onClick={console.log(localStorage.getItem("id"))}>
                    <FontAwesomeIcon icon={faCheckCircle} /> Update Doctor
                    </button> :  null}
                    </div>
                </form>
                </div>
            </div>
          </div>
        </div>
        );
    }
}