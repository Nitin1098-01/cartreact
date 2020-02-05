import React from "react";
import axios from "axios";

import { withRouter } from "react-router-dom";

import "./css/style.css";
import ProductComponent from "./ProductComponent";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      count: 0,
      search: ""
    };
  }

  // fetchProducts = async () => {
  //   const result = await axios.get("http://localhost:4000/viewproduct");
  //   console.log("The result is ", result.data);

  //   this.setState({
  //     products: result.data.data
  //   });
  // };

  // componentDidMount = async () => {
  //   this.fetchProducts();
  // };

  // delete = async id => {
  //   let token = JSON.parse(localStorage.getItem("token"));
  //   let product_id = id;
  //   let response = await axios.post("http://localhost:4000/deletefav", {
  //     product_id: product_id,
  //     test: "this should be in it",
  //     headers: {
  //       authentication: token
  //     }
  //   });
  //   this.fetchProducts();
  //   console.log(response);
  // };

  componentDidMount = async () => {
    const result = await axios.get("http://localhost:4000/viewproduct");
    //const cartresult = await axios.get("http://localhost:4000/viewcart");
    console.log("The result is ", result.data.data);
    //console.log("Count is", cartresult.data.data.length);
    this.setState({
      products: result.data.data
      //  count: cartresult.data.data.length
    });
  };

  openFavorites = async () => {
    this.props.history.push("/Viewfavorite");
  };

  openCart = async () => {
    this.props.history.push("/Viewcart");
  };

  logout = () => {
    this.props.history.push("/LoginPage");
  };

  onSChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  filterprice = () => {};

  filterlikes = () => {};

  render() {
    const filteredList = this.state.products.filter(item => {
      return item.productname
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <div class="general">
        <div class="topLayer">
          <div class="logout" id="logoutHome">
            <a href="" onClick={this.logout}>
              Logout
            </a>{" "}
          </div>
          <div class="topText">
            <h2> SHOPPING SITE </h2>
          </div>

          <div class="buttonDisplay">
            {/* <button onClick={this.openAll} type="button" id="open-btn">
              OPEN ALL
            </button> */}

            <button onClick={this.openCart} type="button" id="cart-btn">
              YOUR CART {this.state.count}
            </button>
            <button onClick={this.openFavorites} type="button" id="fav-btn">
              YOUR FAVORITES
            </button>
          </div>
        </div>

        {/* <div id="fakebox">
         
          <input
            id="fakebox-input"
            autocomplete="off"
            tabindex="-1"
            type="url"
            aria-hidden="true"
          ></input>
          <div id="fakebox-cursor"></div>
        </div> */}

        <div class="emptyfield"></div>
        <div class="transLayer">
          <div class="textArea">
            <input
              id="inputfield"
              name="search"
              onChange={this.onSChange}
              placeholder="Enter a product"
            ></input>
            <button onClick={this.onDeleteClicked} id="searchicon">
              <img src={require("./assests/delete.svg")} alt=""></img>
            </button>

            <button type="button" onClick={this.filterprice} id="filterprice">
              Filter by Price
            </button>
            <div class="slidecounter">
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                class="slider"
                id="myRange"
              ></input>
            </div>
          </div>
        </div>

        <div class="topLayer">
          <div className={"flex-container"}>
            {filteredList.map(product => {
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
            {filteredList.length === 0 ? <h1>No results</h1> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
