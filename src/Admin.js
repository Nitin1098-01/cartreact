import React from "react";
import axios from "axios";
import "./css/style.css";

class Admin extends React.Component {
  customer = () => {
    this.props.history.push("/customer");
  };
  seller = () => {
    this.props.history.push("/sellerpage");
  };
  render() {
    return (
      <div class="container">
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

export default Admin;
