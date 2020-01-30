import React from "react";
import axios from "axios";

import "./css/style.css";
import DisplayDetail from "./DisplayDetail";
import { withRouter } from "react-router-dom";

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

  back = () => {
    this.props.history.push("/seller");
  };

  render() {
    return (
      <div class="general">
        <div class="topLayer">
          <div class="topText">
            <h2> NEWLY ADDED PRODUCT DETAILS </h2>
          </div>
          <button onClick={this.back} id="back">
            BACK
          </button>
        </div>
        <div class="topLayer">
          <div className={"flex-container"}>
            {this.state.products.map(product => {
              return (
                <DisplayDetail
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

export default withRouter(Homepage);
