import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./css/style.css";

class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user_id: "",
      // product_id: ""
      clicks: 0,
      totalprice: 0,
      show: true,
      showbill: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    //this.setState({ totalprice: this.state.clicks * this.props.price });
    this.setState({ showbill: false });
    this.props.onPriceChange(this.props.price);
  };
  DecreaseItem = () => {
    if (this.state.clicks == 0) {
      //this.setState({ clicks: this.state.clicks });
      this.setState({ showbill: false });
    } else {
      this.setState({ clicks: this.state.clicks - 1 });
      //   this.setState({ totalprice: this.state.clicks * this.props.price });
      this.setState({ showbill: false });
      this.props.onPriceChange(this.props.price * -1);
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  ToggleBill = () => {
    this.setState({ showbill: !this.state.showbill });
    this.setState({ totalprice: this.state.clicks * this.props.price });
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

        <div class="layertop">
          {/* <div class="fav">
            <img src={require("./assests/favorite_bold.svg")} alt=""></img>
          </div> */}
        </div>
        <div class="title"> TITLE :{this.props.productname}</div>
        <div class="layermiddle"> DESCRIPTION :{this.props.description} </div>

        <div class="price"> PRICE:{this.props.price}</div>

        <div class="customize">
          <div class="Qty">
            <p>Quantity</p>
          </div>
          <button onClick={this.IncrementItem} class="add" id="add">
            {" "}
            +{" "}
          </button>
          {/* <button onClick={this.ToggleClick}>
            {this.state.show ? "Hide number" : "Show number"}
          </button> */}
          <div class="displayQty">
            {this.state.show ? <h4>{this.state.clicks}</h4> : ""}
          </div>
          <button onClick={this.DecreaseItem} class="sub" id="sub">
            {" "}
            -{" "}
          </button>
        </div>
        <div class="total price">
          <button onClick={this.ToggleBill} id="bill">
            {this.state.showbill ? "Hide Bill" : "Show Bill"}
            {this.state.showbill ? <h4>{this.state.totalprice}</h4> : ""}

            {/* {this.state.show ? <h4>{this.state.totalprice}</h4> : ""} */}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CartComponent);
