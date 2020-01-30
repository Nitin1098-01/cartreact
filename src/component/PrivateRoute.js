import React from "react";
//import { Component } from "react";
import { Access } from "react";

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  //component: Component,
  component: Access,
  authenticated,
  fallbackRoute,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated() === true ? (
          //<Component {...props} />
          <Access {...props} />
        ) : (
          <Redirect
            to={{ pathname: fallbackRoute, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
