import React, { Component } from "react";
import "./SearchHeader.css";
import { useGlobalFilter } from "react-table";

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      for (let j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
        td = tr[i].getElementsByTagName("td")[j];

        if (td) {
          txtValue = td.textContent || td.innerText;

          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col">
            <h5 className="ms-4 mt-1 text-green">{this.props.topic ?? ""}</h5>
          </div>
          <div className="col d-flex justify-content-end">
            <input
              class="mainLoginInput text-end form-control"
              type="text"
              placeholder="&#61442;"
              onChange={this.searchFunction}
              id="myInput"
            />
            <div className="dropdown me-4">
              <a
                href="#"
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
                <strong>{localStorage.getItem("name") ?? "User"}</strong>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
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
    );
  }
}
