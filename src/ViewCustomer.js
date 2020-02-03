import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "./css/style.css";

class ViewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDeleteClicked = () => {
    this.props.deleteHandle(this.props.id);
  };
  // delete = async () => {
  //   let response = await axios.post("http://localhost:4000/delete", {

  //   });
  // };
  render() {
    return (
      <div class="component">
        <div class="empty"></div>
        <div class="layertop"></div>
        <div class="delete">
          <button onClick={this.onDeleteClicked} id="deletebtn">
            <img src={require("./assests/delete.svg")} alt=""></img>
          </button>
        </div>
        <div class="title"> NAME :{this.props.username}</div>
        <div class="layermiddle"> CONTACT :{this.props.phone} </div>
        <div class="price"> EMAIL:{this.props.email}</div>
      </div>
    );
  }
}

export default withRouter(ViewCustomer);
