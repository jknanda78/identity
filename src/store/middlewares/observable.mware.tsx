import { Middleware } from "redux";
import axios from "axios";
import {
  HTTP_REQUEST_FAILURE,
  HTTP_REQUEST,
  HTTP_REQUEST_SUCCESS,
} from "@store/types";

const Observable: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};
  const { data, method, url, success } = payload;
  const { API_BASE_URL, NODE_ENV } = process.env;
  const URL = NODE_ENV === "production" ? `${API_BASE_URL}${url}` : url;

  if (type === HTTP_REQUEST) {
    setTimeout(() => {
      axios({method, url: URL, data})
        .then((res) => {
          store.dispatch({
            type: HTTP_REQUEST_SUCCESS,
            payload: res
          });

          if (success) {
            store.dispatch({
              type: success,
              payload: {data, res}
            });
          }
        })
        .catch((err) => {
          store.dispatch({
            type: HTTP_REQUEST_FAILURE,
            payload: err
          });
        });
    },2000);
  }

  return next(action);
};

// Side-effects
export default Observable;
