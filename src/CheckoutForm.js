import React from "react";
import { injectStripe } from "react-stripe-elements";

import CardSection from "./CardSection";
import Elements from "react-stripe-elements/lib/components/Elements";

// import "./css/MyCardElements.css";
import "./css/style.css";

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment("{PAYMENT_INTENT_CLIENT_SECRET}", {
      payment_method: {
        card: this.props.elements.getElement("card"),
        billing_details: {
          name: "Jenny Rosen"
        }
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
