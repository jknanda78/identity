import { handleActions, Action } from "redux-actions";
import {
  GlobalNotificationModel,
  GlobalNotificationPayload,
} from "../models/global-notification.model";
import { UNSET_GLOBAL_NOTIFICATION, SET_GLOBAL_NOTIFICATION } from "../types";

export type State = {
  notify: boolean;
  notifyType: "error" | "success" | "info" | "warning";
  notifyMessage: string;
};

const initialState: State = {
  notify: false,
  notifyType: "info",
  notifyMessage: "",
};

export const globalNotificationReducer = handleActions<
  State,
  GlobalNotificationModel
>(
  {
    [SET_GLOBAL_NOTIFICATION]: (
      state: State,
      action: Action<GlobalNotificationPayload>
    ) => {
      const newState = action.payload
        ? Object.assign({}, state, action.payload as any, { notify: true })
        : state;
      return newState;
    },
    [UNSET_GLOBAL_NOTIFICATION]: (state: State) => {
      return Object.assign({}, state, {
        notify: false,
        notifyType: "",
        notifyMessage: "",
      });
    },
  },
  initialState
);
