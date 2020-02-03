import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./css/style.css";
import ViewCustomer from "./ViewCustomer";

class CustomerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  fetchUsers = async () => {
    const result = await axios.get("http://localhost:4000/customer");
    console.log("The result is ", result.data);

    this.setState({
      users: result.data
    });
  };

  componentDidMount = async () => {
    this.fetchUsers();
  };

  back = () => {
    this.props.history.push("/Admin");
  };

  delete = async id => {
    let token = JSON.parse(localStorage.getItem("token"));
    let userid = id;
    let response = await axios.post("http://localhost:4000/delete", {
      userid: userid,
      test: "this should be in it",
      headers: {
        authentication: token
      }
    });
    this.fetchUsers();
    console.log(response);
  };

  render() {
    return (
      <div class="general">
        <div class="topLayer">
          <div class="topText">
            <h2> CUSTOMERS INFO </h2>
          </div>
          <button onClick={this.back} id="back">
            {" "}
            BACK
          </button>
          <div class="buttonDisplay">
            {/* <button onClick={this.openAll} type="button" id="open-btn">
              OPEN ALL
            </button> */}
          </div>
        </div>
        <div class="topLayer">
          <div className={"flex-container"}>
            {this.state.users.map(users => {
              return (
                <ViewCustomer
                  key={users.userid}
                  username={users.username}
                  phone={users.phone}
                  email={users.email}
                  id={users.userid}
                  deleteHandle={this.delete}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CustomerPage);
