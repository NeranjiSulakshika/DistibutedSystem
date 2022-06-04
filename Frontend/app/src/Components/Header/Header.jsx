import React from "react";
import "./Header.css";
import DriverList from "../../Pages/Ambulance/AmbulanceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



export default function Header(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <h5 className="ms-4 mt-1 text-green">{props.topic ?? ""}</h5>
        </div>
        <div className="col d-flex justify-content-end">
          <div className="dropdown me-4">
            <a
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{localStorage.getItem("name").toString}</strong>
            </a>
           <div>
           <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="ado">
                  Settings
                </a>
              </li>
              <li>
                <a to="/"   className="dropdown-item">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
