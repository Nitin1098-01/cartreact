import React from "react";
import Popup from "./components/Popup";

class Firstpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <h1> Welcome!!! Happy Shopping </h1>
        <button onClick={this.togglePopup.bind(this)}> Click To Signup</button>

        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Firstpage;
