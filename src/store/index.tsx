import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { rootReducer, RootState } from "./reducers";
import navigationMiddleware from "@middlewares/navigation.middleware";
import observableMiddleware from "@middlewares/observable.middleware";
import notificationMiddleware from "@middlewares/notification.middleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Create history
export const history = createBrowserHistory({
  basename: "/identity-app",
});

// Create router middleware using history
export const routerMiddleware = createRouterMiddleware(history);

export const configureStore = (initialState?: RootState) => {
  // add middlewares
  const middlewares = [
    navigationMiddleware,
    observableMiddleware,
    notificationMiddleware,
    routerMiddleware
  ];

  // add enhancer
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState, enhancer);
};
