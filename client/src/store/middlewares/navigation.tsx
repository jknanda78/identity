import { Middleware } from "redux";
import { HTTP_REQUEST_SUCCESS, NAVIGATE } from "@store/types";
import { history } from "@store";

const Navigation: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};

  if (type === NAVIGATE && payload.challenge) {
    const { challenge } = payload;
    store.dispatch(history.push(challenge));
  } else if (type === HTTP_REQUEST_SUCCESS && payload.data) {
    const { challenge, ...data } = payload?.data || {};
    store.dispatch(history.push(challenge));
  }

  return next(action);
};

export default Navigation;
