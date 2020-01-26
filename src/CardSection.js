import React from "react";
import { CardElement } from "react-stripe-elements";

// import "./css/MyCardElements.css";
import "./css/style.css";

const style = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

const CardSection = () => {
  return (
    <label>
      Card details
      <CardElement className="MyCardElements" style={style} />
    </label>
  );
};

export default CardSection;
