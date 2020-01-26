import React, { Component } from "react";
import Elements from "react-stripe-elements/lib/components/Elements";
import CheckoutForm from "./CheckoutForm";

// import "./css/MyCardElements.css";

import "./css/style.css";

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}

export default CheckoutPage;
