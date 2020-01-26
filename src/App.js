import React from "react";
import Loginpage from "./LoginPage";
import Signup from "./Signup";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import PrivateRoute from "./component/PrivateRoute";
import Viewfavorite from "./Viewfavorite";
import Viewcart from "./Viewcart";
import FavoriteComponent from "./FavoriteComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./MyStoreCheckout";
import CheckoutForm from "./CheckoutForm";
import CheckoutPage from "./CheckoutPage";
import Checkoutnew from "./Checkoutnew";

function authenticator() {
  let usrDetails = localStorage.getItem("user");
  if (!usrDetails) {
    return false;
  } else {
    return true;
  }
}

function App() {
  return (
    <StripeProvider apiKey="pk_test_HGwTyyoYx16UzVEKbTJXXhKo00DOLdSmEB">
      <Router>
        <PrivateRoute
          authenticated={authenticator}
          exact
          path="/"
          component={Homepage}
          // component={Firstpage}
          fallbackRoute={"/Signup"}
        />
        <Route path="/Loginpage" component={Loginpage} />
        <Route path="/Signup" component={Signup} />
        {/* <PrivateRoute path="/Homepage" component={Homepage} /> */}
        <PrivateRoute
          path="/Viewfavorite"
          component={Viewfavorite}
          authenticated={authenticator}
          fallbackRoute={"/Signup"}
        />
        <PrivateRoute
          path="/Viewcart"
          component={Viewcart}
          authenticated={authenticator}
          fallbackRoute={"/Signup"}
        />
        <PrivateRoute
          path="/checkout"
          component={Checkoutnew}
          authenticated={authenticator}
          fallbackRoute={"/Signup"}
        />
      </Router>
    </StripeProvider>
  );
}

export default App;
