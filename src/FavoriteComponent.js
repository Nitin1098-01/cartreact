import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "./css/style.css";

class FavoriteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user_id: "",
      // product_id: ""
      isFavorite: true
    };
  }

  onDeleteClicked = () => {
    this.props.deleteHandle(this.props.productid);
  };

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

        <div class="delete">
          <button onClick={this.onDeleteClicked} id="deletebtn">
            <img src={require("./assests/delete.svg")} alt=""></img>
          </button>
        </div>

        <div class="layertop">
          <div class="favs">
            <p>Recently added to favorite</p>
            {/* <img
              src={require("./assests/favorite_bold.svg")}
              alt=""
              width="20px"
            ></img> */}
          </div>
        </div>

        <div class="title"> TITLE :{this.props.productname}</div>

        <div class="layermiddle"> DESCRIPTION :{this.props.description} </div>

        <div class="price"> PRICE:{this.props.price}</div>
      </div>
    );
  }
}

export default withRouter(FavoriteComponent);
