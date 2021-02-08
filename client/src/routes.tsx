import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "@pages/containers/sign-in.container";
import CreateAccount from "@pages/containers/create-account.container";
import UserProfile from "@pages/containers/user-profile.container";

type routerProps = {
  context?: any;
};

export default (props: routerProps) => {
  const { context = {} } = props;
  return (
      <Switch>
        {!context.ssr ? <Redirect exact from="/" to="/login" /> : null}
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
