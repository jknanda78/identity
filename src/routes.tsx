import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@pages/containers/home.container";
import SignIn from "@pages/containers/sign-in.container";
import CreateAccount from "@pages/containers/create-account.container";
import UserProfile from "@pages/containers/user-profile.container";

export default () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
        key="account-home"
      />
      <Route
        exact
        path="/login"
        component={SignIn}
        key="acount-signin"
      />
      <Route
        exact
        path="/createAccount"
        component={CreateAccount}
        key="acount-create-account"
      />
      <Route
        exact
        path="/user/profile"
        component={UserProfile}
        key="acount-user-profile"
      />
      </Switch>
  );
};
