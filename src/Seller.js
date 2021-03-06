import React from "react";
import axios from "axios";
import "./css/style.css";
import { withRouter } from "react-router-dom";

class Seller extends React.Component {
  insert = () => {
    this.props.history.push("/Form");
  };
  display = () => {
    this.props.history.push("/ViewNewProducts");
  };
  logout = () => {
    localStorage.clear();
    this.props.history.push("/Signup");
  };
  render() {
    return (
      <div class="container">
        <div class="logout">
          <a href="" onClick={this.logout}>
            Logout
          </a>
        </div>
        <div class="empty"></div>
        <div class="text">
          <p>Welcome Seller</p>
        </div>
        <div class="empty"></div>
        <div class="nav">
          <button onClick={this.insert} id="insertbtn">
            {" "}
            INSERT{" "}
          </button>
          <button onClick={this.display} id="viewBillbtn">
            {" "}
            VIEW{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Seller);
