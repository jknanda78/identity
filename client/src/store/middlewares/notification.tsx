import { Middleware } from "redux";
import {
  HTTP_REQUEST_FAILURE,
  SET_GLOBAL_NOTIFICATION
} from "@store/types";

const Notification: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};

  if (type === HTTP_REQUEST_FAILURE) {
    const { message, alert } = payload?.response?.data || {};

    store.dispatch({
      type: SET_GLOBAL_NOTIFICATION,
      payload: {
        notifyType: alert,
        notifyMessage: message,
      }
    });
  }

  return next(action);
};

export default Notification;
