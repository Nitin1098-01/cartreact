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

  componentDidMount = async () => {
    const result = await axios.get("http://localhost:4000/customer");
    console.log("The result is ", result.data);

    this.setState({
      users: result.data
    });
  };

  back = () => {
    this.props.history.push("/Admin");
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
