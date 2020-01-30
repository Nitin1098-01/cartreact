import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Seller from "./Seller";
import Form from "./Form";
import ViewNewProducts from "./ViewNewProducts";
import Homepage from "./Homepage";
import Admin from "./Admin";
import { withRouter } from "react-router-dom";
import CustomerPage from "./CustomerPage";
import SellerPage from "./SellerPage";
import Viewcart from "./Viewcart";
import Viewfavorite from "./Viewfavorite";

// function sellerAuthenticator() {
//   let userType = JSON.parse(localStorage.getItem("user"));
//   userType = userType.roleid;
//   if (userType === 1 || userType === 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function sellerSuperAuthenticator() {
//   let userType = JSON.parse(localStorage.getItem("user"));
//   userType = userType.roleid;
//   if (userType === 2) {
//     return true;
//   } else {
//     alert("Illegal Access!!!");
//     return false;
//   }
// }
// function sellerViewAuthenticator() {
//   let userType = JSON.parse(localStorage.getItem("user"));
//   userType = userType.roleid;
//   if (userType === 1 || userType === 2) {
//     return true;
//   } else {
//     alert("Illegal Access");
//     return false;
//   }
// }

// function adminAuthenticator() {
//   let userType = JSON.parse(localStorage.getItem("user"));
//   userType = userType.roleid;
//   if (userType === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

function Access(props) {
  let userType = JSON.parse(localStorage.getItem("user"));
  let path = props.match.path;
  console.log(props);
  userType = userType.roleid;
  if (userType === 0 && (path === "/" || path === "/Homepage")) {
    return <Homepage />;
  } else if (userType === 0 && path === "/Viewcart") {
    return <Viewcart />;
  } else if (userType === 0 && path === "/Viewfavorite") {
    return <Viewfavorite />;
  } else if ((userType === 1 || userType === 2) && path === "/seller") {
    return <Seller />;
  } else if (
    (userType === 1 || userType === 2) &&
    path === "/viewnewproducts"
  ) {
    return <ViewNewProducts />;
  } else if (userType === 2 && userType !== 1 && path === "/form") {
    return <Form />;
  } else if (userType === 1 && userType !== 2 && path === "/form") {
    alert("Illegal Access");
    return <Seller />;
  } else if (userType === 3 && path === "/admin") {
    return <Admin />;
  } else if (userType === 3 && path === "/customer") {
    return <CustomerPage />;
  } else if (userType === 3 && path === "/sellerpage") {
    return <SellerPage />;
  }
  //return <h1>If you're seeing this, something went wrong</h1>;
}

export default withRouter(Access);
