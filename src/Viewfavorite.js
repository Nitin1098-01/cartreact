import React from "react";
import axios from "axios";

import "./css/style.css";
import FavoriteComponent from "./FavoriteComponent";

class Viewfavorite extends React.Component {
  componentDidMount = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    let d = {
      // user_id: user.user_id,
      product_id: this.props.product_id
    };
    console.log(d);
    let response = await axios.get(
      "http://localhost:4000/viewfavorite",

      {
        headers: {
          authorization: token
        }
      }
    );
    console.log(response);
    this.setState({
      favorites: response.data.data
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }
  back = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div class="general">
        <div class="topLayer">
          <div class="topText">
            <h2> SHOPPING SITE </h2>
          </div>
          <button onClick={this.back} id="back">
            {" "}
            BACK
          </button>
        </div>
        {/* {this.state.favorites.map(product => {
            return (
              <ProductComponent
                key={product.productid}
                productname={product.productname}
                image={product.image}
                description={product.description}
                quantity={product.quantity}
                price={product.price}
                product_id={product.productid}
              />
            );
          })} */}
        <div class="topLayer">
          <div className={"flex-container"}>
            {this.state.favorites.map(product => {
              return (
                <FavoriteComponent
                  key={product.productid}
                  productname={product.productname}
                  image={product.image}
                  description={product.description}
                  quantity={product.quantity}
                  price={product.price}
                  product_id={product.productid}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Viewfavorite;