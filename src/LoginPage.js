import React from "react";

import axios from "axios";

import "./css/style.css";
class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // usr: "",
      // pwd: ""
    };
  }
  validate = async () => {
    let response = await axios.post("http://localhost:4000/login", {
      username: this.state.usr,
      password: this.state.pwd
    });
    // console.log(response);
    alert(response.data.message);
    if (response.data.success) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      this.props.history.push("/");
    }
  };

  onSChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div class="container">
        <h1>Login</h1>
        <p>One step ahead.</p>

        <label for="usr">
          <b>Username</b>
        </label>
        <input
          type="text"
          // onChange={this.onNameChange}
          onChange={this.onSChange}
          placeholder="Enter Username"
          name="usr"
          required
        ></input>

        <label for="pwd">
          <b>Password</b>
        </label>
        <input
          type="password"
          // onChange={this.onPassChange}
          onChange={this.onSChange}
          placeholder="Enter Password"
          name="pwd"
          required
        ></input>

        {/* <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        ></input>

        <label>
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

        <div class="clearfix">
          {/* <button type="button" class="cancelbtn">
            CANCEL
          </button> */}
          <button onClick={this.validate} class="signupbtn">
            SIGN IN
          </button>
        </div>
      </div>
    );
  }
}

export default Loginpage;
