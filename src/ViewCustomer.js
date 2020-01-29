import React from "react";
import axios from "axios";

import "./css/style.css";

class ViewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="component">
        <div class="empty"></div>
        <div class="layertop"></div>
        <div class="title"> NAME :{this.props.username}</div>
        <div class="layermiddle"> CONTACT :{this.props.phone} </div>
        <div class="price"> EMAIL:{this.props.email}</div>
      </div>
    );
  }
}

export default ViewCustomer;
