import { createAction } from "redux-actions";
import { UserProfilePayload } from "@models/user-profile.model";
import { SET_USER_PROFILE } from "@types";

export const Type = {
  SET_USER_PROFILE,
};

export const setUserProfile = createAction<UserProfilePayload>(
  Type.SET_USER_PROFILE
);
