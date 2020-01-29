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
import Seller from "./Seller";
import Form from "./Form";
import ViewNewProducts from "./ViewNewProducts";
import Admin from "./Admin";
import CustomerPage from "./CustomerPage";
import SellerPage from "./SellerPage";

function authenticator() {
  let usrDetails = localStorage.getItem("user");
  if (!usrDetails) {
    return false;
  } else {
    return true;
  }
}

function userTypeAuthenticator() {
  let userType = JSON.parse(localStorage.getItem("user"));
  userType = userType.roleid;
  if (userType === 1) {
    return true;
  } else {
    return false;
  }
}

function adminAuthenticator() {
  let userType = JSON.parse(localStorage.getItem("user"));
  userType = userType.roleid;
  if (userType === 2) {
    return true;
  } else {
    return false;
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

        <PrivateRoute
          path="/seller"
          component={Seller}
          authenticated={userTypeAuthenticator}
          fallbackRoute={"/LoginPage"}
        />

        <PrivateRoute
          path="/form"
          component={Form}
          authenticated={userTypeAuthenticator}
          fallbackRoute={"/LoginPage"}
        />

        <PrivateRoute
          path="/viewnewproducts"
          component={ViewNewProducts}
          authenticated={userTypeAuthenticator}
          fallbackRoute={"/LoginPage"}
        />

        <PrivateRoute
          path="/admin"
          component={Admin}
          authenticated={adminAuthenticator}
          fallbackRoute={"/Signup"}
        />

        <PrivateRoute
          path="/customer"
          component={CustomerPage}
          authenticated={adminAuthenticator}
          fallbackRoute={"/Signup"}
        />

        <PrivateRoute
          path="/sellerpage"
          component={SellerPage}
          authenticated={adminAuthenticator}
          fallbackRoute={"/Signup"}
        />
      </Router>
    </StripeProvider>
  );
}

export default App;
