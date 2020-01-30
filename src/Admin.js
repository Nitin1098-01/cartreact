import React from "react";
import axios from "axios";
import "./css/style.css";
import { withRouter } from "react-router-dom";

class Admin extends React.Component {
  customer = () => {
    this.props.history.push("/customer");
    // window.location.push("/customer");
  };
  seller = () => {
    //this.props.history.push("/sellerpage");
    this.props.history.push("/sellerpage");
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
          <p>Welcome Admin</p>
        </div>
        <div class="empty"></div>
        <div class="nav">
          <button onClick={this.customer} id="custbtn">
            {" "}
            CUSTOMER INFO{" "}
          </button>
          <button onClick={this.seller} id="sellerbtn">
            {" "}
            SELLER INFO{" "}
          </button>
          {/* <button onClick={this.display} id="prdtbtn">
            {" "}
            PRODUCTS INFO{" "}
          </button> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);
