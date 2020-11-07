import { Middleware } from "redux";
import axios from "axios";
import {
  HTTP_REQUEST_FAILURE,
  HTTP_REQUEST,
  HTTP_REQUEST_SUCCESS,
} from "@types";

const Observable: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};
  const { data, method, url } = payload;
  
  if (type === HTTP_REQUEST) {
    setTimeout(() => {
      axios({method, url, data})
        .then((res) => {
          store.dispatch({
            type: HTTP_REQUEST_SUCCESS,
            payload: res
          });
        })
        .catch((err) => {
          store.dispatch({
            type: HTTP_REQUEST_FAILURE,
            payload: err
          });
        });
    }, 2000);
  }

  return next(action);
};

// Side-effects
export default Observable;
