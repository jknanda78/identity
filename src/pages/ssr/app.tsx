import React from "react";
import { Provider } from "react-redux";
import {StaticRouter } from "react-router";
import Routes from "../../routes";

type appProps = {
  context: any;
  req: any;
  store: any;
};

export default (props: appProps) => {
  const { context, req, store } = props;
  return (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
};
