import React from "react";
import { Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";

// import "./css/MyCardElements.css";

import "./css/style.css";

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
