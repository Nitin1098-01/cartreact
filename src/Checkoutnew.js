import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements
} from "react-stripe-elements";

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      width: "700px",
      hidden: "zip",
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",

        "::placeholder": {
          color: "#aab7c4",
          hidden: "zip"
        }
      },
      invalid: {
        color: "#c23d4b"
      }
    }
  };
};

class _CardForm extends Component {
  state = {
    errorMessage: ""
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
      //alert("Payment successful");
      console.log(this.props.stripe);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <div className="CardDemo">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Card details
            <CardElement onChange={this.handleChange} {...createOptions()} />
          </label>
          <div className="error" role="alert">
            {this.state.errorMessage}
          </div>
          <button>Pay</button>
        </form>
      </div>
    );
  }
}

const CardForm = injectStripe(_CardForm);

export default class CardDemo extends Component {
  render() {
    return (
      <StripeProvider apiKey={"pk_test_HGwTyyoYx16UzVEKbTJXXhKo00DOLdSmEB"}>
        <Elements>
          <CardForm handleResult={() => {}} />
        </Elements>
      </StripeProvider>
    );
  }
}
