import { createAction } from "redux-actions";
import { GlobalNotificationPayload } from "../models/global-notification.model";
import { UNSET_GLOBAL_NOTIFICATION, SET_GLOBAL_NOTIFICATION } from "../types";

export const Type = {
  UNSET_GLOBAL_NOTIFICATION,
  SET_GLOBAL_NOTIFICATION,
};

export const setGlobalNotification = createAction<GlobalNotificationPayload>(
  Type.SET_GLOBAL_NOTIFICATION
);

export const unsetGlobalNotification = createAction<GlobalNotificationPayload>(
  Type.UNSET_GLOBAL_NOTIFICATION
);
