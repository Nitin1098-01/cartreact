import React from "react";
import axios from "axios";

import "./css/style.css";

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user_id: "",
      // product_id: ""
      isFavorite: false
    };
  }

  addtoCart = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    let d = {
      // user_id: user.user_id,
      product_id: this.props.product_id
    };
    console.log(d);
    let response = await axios.post(
      "http://localhost:4000/addcart",
      {
        data: d
      },
      {
        headers: {
          authorization: token
        }
      }
    );
    console.log(response);
  };

  onUnFavoriteClicked = async () => {
    // let user = JSON.parse(localStorage.getItem("user"));
    let token = JSON.parse(localStorage.getItem("token"));
    let d = {
      // user_id: user.user_id,
      product_id: this.props.product_id
    };
    console.log(d);
    let response = await axios.post(
      "http://localhost:4000/addfavorite",
      {
        data: d
      },
      {
        headers: {
          authorization: token
        }
      }
    );
    console.log(response);
    this.setState({
      isFavorite: true
    });
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
          <div class="fav">
            {this.state.isFavorite ? (
              //Favorited
              <button
                onClick={this.onFavoriteClicked}
                class="favorites"
                id="favbtn"
              >
                <img src={require("./assests/favorite_bold.svg")} alt=""></img>
              </button>
            ) : (
              //Not favorited yet
              <button
                onClick={this.onUnFavoriteClicked}
                class="unfavorites"
                id="favbtn"
              >
                {/* Not favorite yet */}
                <img src={require("./assests/favorite.svg")} alt=""></img>
              </button>
            )}
          </div>
        </div>
        <div class="title"> TITLE :{this.props.productname}</div>
        <div class="layermiddle"> DESCRIPTION :{this.props.description} </div>

        <div class="price"> PRICE:{this.props.price}</div>
        <div class="layerbottom">
          <button onClick={this.addtoCart} type="button" id="addcart-btn">
            ADD CART
          </button>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
