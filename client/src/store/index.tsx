import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { rootReducer } from "@reducers/index";
import observableMiddleware from "@middlewares/observable";
import notificationMiddleware from "@middlewares/notification";
import navigationMiddleware from "@middlewares/navigation";
import passwordCredential from "@middlewares/password-cred";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __REDUX_STATE__?: typeof compose;
    PasswordCredential?: any;
  }
}

// Create history
export const history: any  = createBrowserHistory();

// Create router middleware using history
export const routerMiddleware = createRouterMiddleware(history);

export const configureStore = () => {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState: any = window.__REDUX_STATE__ || {};

  // Allow the passed state to be garbage-collected
  if (window.__REDUX_STATE__) {
    delete window.__REDUX_STATE__;
  }

  // add middlewares
  const middlewares = [
    navigationMiddleware,
    observableMiddleware,
    notificationMiddleware,
    routerMiddleware,
    passwordCredential
  ];

  // add enhancer
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, preloadedState, enhancer);
};
