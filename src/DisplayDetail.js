import React from "react";
import axios from "axios";

import "./css/style.css";

class DisplayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="component">
        <div class="image">
          <img
            //src={`data:image/png;base64, ${this.props.image}`}
            src={this.props.image}
            alt=""
            style={{ width: "100%" }}
          ></img>
        </div>
        <div class="empty"></div>
        <div class="layertop"></div>
        <div class="title"> TITLE :{this.props.productname}</div>
        <div class="layermiddle"> DESCRIPTION :{this.props.description} </div>

        <div class="price"> PRICE:{this.props.price}</div>
      </div>
    );
  }
}

export default DisplayDetail;
