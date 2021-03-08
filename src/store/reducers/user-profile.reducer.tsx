import { handleActions, Action } from "redux-actions";
import {
  UserProfileModel
} from "../models/user-profile.model";
import { SET_USER_PROFILE } from "../types";

export type State = UserProfileModel;

const initialState: State = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
};

export const userProfileReducer = handleActions<State, UserProfileModel>(
  {
    [SET_USER_PROFILE]: (state: State, action: Action<UserProfileModel>) => {
      const newState = action.payload
        ? Object.assign({}, state, action.payload as any)
        : state;
      return newState;
    },
  },
  initialState
);
