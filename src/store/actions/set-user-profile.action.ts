import { createAction } from "redux-actions";
import { UserProfileModel } from "@models/user-profile.model";
import { SET_USER_PROFILE } from "@store/types";

export const Type = {
  SET_USER_PROFILE,
};

export const setUserProfile = createAction<UserProfileModel>(
  Type.SET_USER_PROFILE
);
