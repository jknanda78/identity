import { handleActions, Action } from "redux-actions";
import {
  UserProfileModel,
  UserProfilePayload,
} from "../models/user-profile.model";
import { SET_USER_PROFILE } from "../types";

export type State = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const userProfileReducer = handleActions<State, UserProfileModel>(
  {
    [SET_USER_PROFILE]: (state: State, action: Action<UserProfilePayload>) => {
      const newState = action.payload
        ? Object.assign({}, state, action.payload as any)
        : state;
      return newState;
    },
  },
  initialState
);
