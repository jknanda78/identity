import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { configureStore, history } from "@store";
import Routes from "./routes";
import "@styles/normalize.css";

// create new store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
