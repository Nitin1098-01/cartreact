import React from "react";
import axios from "axios";

import "./css/style.css";
import ProductComponent from "./ProductComponent";
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount = async () => {
    const result = await axios.get("http://localhost:4000/viewproduct");
    console.log("The result is ", result.data.data);

    this.setState({
      products: result.data.data
    });
  };

  openFavorites = async () => {
    this.props.history.push("/Viewfavorite");
  };

  openCart = async () => {
    this.props.history.push("/Viewcart");
  };

  render() {
    return (
      <div class="general">
        <div class="topLayer">
          <div class="topText">
            <h2> SHOPPING SITE </h2>
          </div>
          <div class="buttonDisplay">
            <button onClick={this.openAll} type="button" id="open-btn">
              OPEN ALL
            </button>
            <button onClick={this.openCart} type="button" id="cart-btn">
              YOUR CART
            </button>
            <button onClick={this.openFavorites} type="button" id="fav-btn">
              YOUR FAVORITES
            </button>
          </div>
        </div>
        <div class="topLayer">
          <div className={"flex-container"}>
            {this.state.products.map(product => {
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
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
