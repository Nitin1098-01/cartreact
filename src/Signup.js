import React from "react";
import axios from "axios";
import "./css/style.css";

// import ReactTooltip from "react-tooltip";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { showPopup: false };

    this.state = {
      // name: "",
      // usr: "",
      // pwd: "",
      validation: {}
    };
  }

  handleSubmit = async () => {
    if (
      this.state.validation.usr ||
      this.state.validation.number ||
      this.state.validation.email ||
      this.state.validation.pwd ||
      this.state.validation.type
    ) {
      alert("There are validation errors, please fix them");
      return;
    }
    let response = await axios.post("http://localhost:4000/signup", {
      username: this.state.usr,
      password: this.state.pwd,
      number: this.state.number,
      email: this.state.email,
      roleid: this.state.type
    });
    // console.log(response);
    alert(response.data.message);
    this.props.history.push("/Loginpage");
  };

  onSChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
    let validation = this.state.validation;
    validation[ev.target.name] = this.validateField(
      ev.target.name,
      ev.target.value
    );
    this.setState({
      validation: validation
    });
    console.log(this.state);
  };

  // handleUserInput = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value }, () => {
  //     this.validateField(name, value);
  //   });
  // };

  validateField(fieldName, value) {
    let validationErrorText = null;
    switch (fieldName) {
      case "usr":
        if (value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)) {
          break;
        } else {
          validationErrorText = "*Enter the proper username";
          break;
        }
      case "number":
        if (value.match(/^\(\+[0-9]{0,2}\)-[0-9]{10}$/g)) {
          break;
        } else if (value.match(/^[2-9]{2}[0-9]{8}$/g)) {
          break;
        } else if (value.match(/^\+[0-9]{0,2}[0-9]{10}$/g)) {
          break;
        } else {
          validationErrorText = "*Enter proper phone number";
          break;
        }

      case "email":
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          break;
        } else {
          validationErrorText = "*Enter proper email";
          break;
        }

      case "pwd":
        if (value.length >= 6) {
          break;
        } else {
          validationErrorText = "*Password is too small";
          break;
        }
      case "type":
        if (["0", "1", "2"].includes(value) === false) {
          validationErrorText = "Please select a user type";
          break;
        }
        break;
      default:
        throw TypeError("*The field name is not specified");
    }
    return validationErrorText;
  }

  render() {
    return (
      <div class="container">
        <h1>Hi User...Sign up to get in touch</h1>
        <p>Please fill in this form to create an account.</p>
        {/* <div class="tooltip"> */}

        <label
          for="usr"
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Username should contain only alphabets a to z and not numbers"
        >
          <b>Username</b>
        </label>
        {/* <span>
          { <a
            href="#"
            data-toggle="tooltip"
            data-placement="top"
            title="Hooray!"
          ></a> }
        </span> */}

        <span className={"error-text"}>
          {this.state.validation.usr ? this.state.validation.usr : ""}
        </span>

        <input
          type="text"
          // onChange={this.onNameChange}
          onChange={this.onSChange}
          placeholder="Username should contain only alphabets"
          name="usr"
          required
        ></input>

        <label
          for="number"
          href="#"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Phone number should be 10 digit number either (+91)-<phone_number> or +91<phone_number> or <phone_number>"
        >
          <b>Phone Number</b>
        </label>
        <span className={"error-text"}>
          {this.state.validation.number ? this.state.validation.number : ""}
        </span>
        <input
          type="text"
          // onChange={this.onMailChange}
          onChange={this.onSChange}
          placeholder="Enter the phone number according to the hover text format"
          name="number"
          required
        ></input>

        <label
          for="email"
          href="#"
          data-toggle="tooltip"
          data-placement="bottom"
          title="eg: abc@abc.com"
        >
          <b>Email</b>
        </label>
        <span className={"error-text"}>
          {this.state.validation.email ? this.state.validation.email : ""}
        </span>
        <input
          type="text"
          // onChange={this.onMailChange}
          onChange={this.onSChange}
          placeholder="Enter proper email id [Follow the example given in the hover text]"
          name="email"
          required
        ></input>

        <label
          for="pwd"
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Minimum length of password is 6"
        >
          <b>Password</b>
        </label>
        <span className={"error-text"}>
          {this.state.validation.pwd ? this.state.validation.pwd : ""}
        </span>
        <input
          // className={"error"}
          type="password"
          // onChange={this.onPassChange}
          onChange={this.onSChange}
          placeholder="Enter Password"
          name="pwd"
          required
        ></input>

        {/* <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style={{ marginBottom: "15px" }}
          ></input>
        </label> */}

        {/* <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p> */}
        {/* <b>User Type</b> */}
        <div class="emptyfield"></div>
        <label
          for="type"
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Choose any of the user type"
        >
          <b>User Type</b>
        </label>
        <div>
          <select name="type" onChange={this.onSChange}>
            <option value="">Select</option>
            <option value="0">Customer</option>
            <option value="1">Seller</option>
            <option value="2">Admin</option>
          </select>
        </div>

        <div class="emptyfield"></div>
        <div class="clearfix">
          {/* <button type="button" class="cancelbtn">
            CANCEL
          </button> */}
          <button onClick={this.handleSubmit} class="signupbtn">
            SUBMIT
          </button>
        </div>

        <a href="/Loginpage"> Already has an account... </a>
      </div>
      // </div>
    );
  }
}

export default Signup;
