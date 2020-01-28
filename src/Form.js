import React from "react";
import axios from "axios";
import "./css/style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }

  handleChange(event) {
    this.setState({
      //   value: event.target.value
      [event.target.name]: event.target.value,
      productImage: ""
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (!this.state.productImage) {
      alert("Please include an image");
      return;
    }
    if (!this.state.productName) {
      alert("Please enter the product name");
      return;
    }
    if (!this.state.productDesc) {
      alert("Please enter the Product Description");
      return;
    }
    if (!this.state.productQuantity) {
      alert("Please enter the Product Quantity");
      return;
    }
    if (!this.state.productPrice) {
      alert("Please enter the price of the Product");
      return;
    }

    alert("Submitted Successfully");
    this.props.history.push("/LoginPage");
    console.log(this.state);

    let token = JSON.parse(localStorage.getItem("token"));
    let d = {
      // user_id: user.user_id,
      productName: this.state.prdtname,
      productDesc: this.state.prdtdesc,
      productQuantity: this.state.prdtqty,
      productPrice: this.state.prdtprice
    };
    console.log(d);

    let response = await axios.post("http://localhost:4000/addNewProduct", {
      name: this.state.prdtname,
      desc: this.state.prdtdesc,
      quantity: this.state.prdtqty,
      price: this.state.prdtprice,
      image: this.state.productImage,
      headers: {
        authorization: token
      }
    });
    console.log(response);
  };

  previewFile = event => {
    const preview = document.querySelector("img");
    const file = event.target.files[0];
    console.log("Event fired", event, "on", event.target);
    console.log("The file is", event.target.files);
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        preview.src = reader.result;
        this.setState({
          productImage: reader.result
        });
      },
      true
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  back = () => {
    this.props.history.push("/Seller");
  };

  render() {
    return (
      <div class="container">
        <div class="empty"></div>
        <h1> Please do fill this Product details form </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Product name :{" "}
            <input
              type="text"
              name="prdtname"
              //value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <div>
            <label>
              Product description :{" "}
              <input
                type="text"
                name="prdtdesc"
                //value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <label>
            Product quantity :{" "}
            <input
              type="text"
              name="prdtqty"
              // value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <div>
            <label>
              Price :{" "}
              <input
                type="text"
                name="prdtprice"
                // value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Image :{" "}
              <input
                type="file"
                name="prdtimg"
                // value={this.state.value}
                onChange={this.previewFile}
              />
              <br />
              <img src="" height="200" alt="Image preview..." />{" "}
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div class="empty"></div>
          <div>
            {" "}
            <button onClick={this.back}> BACK </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
