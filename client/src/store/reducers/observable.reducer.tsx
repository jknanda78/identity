import { handleActions, Action } from "redux-actions";
import {
  HttpRequestModel
} from "../models/observable.model";
import {
  HTTP_REQUEST,
  HTTP_REQUEST_FAILURE,
  HTTP_REQUEST_SUCCESS
} from "../types";

export type State = {
  isSubmitting: boolean;
};

const initialState: State = {
  isSubmitting: false
};

export const observableReducer = handleActions<
  State,
  HttpRequestModel
>(
  {
    [HTTP_REQUEST]: (
      state: State,
      action: Action<HttpRequestModel>
    ) => {
      return Object.assign({}, state, {
        isSubmitting: true
      });
    },
    [HTTP_REQUEST_FAILURE]: (state: State) => {
      return Object.assign({}, state, {
        isSubmitting: false
      });
    },
    [HTTP_REQUEST_SUCCESS]: (state: State) => {
      return Object.assign({}, state, {
        isSubmitting: false
      });
    },
  },
  initialState
);
