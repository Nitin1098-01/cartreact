import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./css/style.css";
import CartComponent from "./CartComponent";

class Viewcart extends React.Component {
  componentDidMount = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    let d = {
      // user_id: user.user_id,
      product_id: this.props.product_id
    };
    console.log(d);
    let response = await axios.get(
      "http://localhost:4000/viewcart",

      {
        headers: {
          authorization: token
        }
      }
    );
    console.log(response);
    this.setState({
      cart: response.data.data
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalprice: 0
    };
  }

  back = () => {
    this.props.history.push("/");
  };

  addtoTotal = price => {
    const previousPrice = this.state.totalprice;
    this.setState({ totalprice: Number(previousPrice) + Number(price) });
  };

  makepayment = async () => {
    // let user = JSON.parse(localStorage.getItem("user"));
    let token = JSON.parse(localStorage.getItem("token"));

    let response = await axios.post(
      "http://localhost:4000/startpayment",
      {
        price: Number(this.state.totalprice)
      },
      {
        headers: {
          authorization: token
        }
      }
    );
    alert(response.data.message);
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <div class="general">
        <div class="topLayer">
          <div class="topText">
            <h2> SHOPPING SITE </h2>
          </div>
          <button onClick={this.makepayment} id="payment">
            {" "}
            Move to Payment{" "}
          </button>
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
            {/* <span>The total price is currently {this.state.totalprice}</span> */}
            {this.state.cart.map(product => {
              return (
                <CartComponent
                  onPriceChange={this.addtoTotal}
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

export default withRouter(Viewcart);
