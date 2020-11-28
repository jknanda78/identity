import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "@pages/containers/sign-in.container";
import CreateAccount from "@pages/containers/create-account.container";
import UserProfile from "@pages/containers/user-profile.container";
import { history } from "@store";

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
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
    </Router>
  );
};
