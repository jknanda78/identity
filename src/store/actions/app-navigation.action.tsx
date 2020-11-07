import { createAction } from "redux-actions";
import { AppNavigationPayload } from "../models/app-navigation.model";
import { NAVIGATE } from "../types";

export const Type = {
  NAVIGATE,
};

export const navigateTo = createAction<AppNavigationPayload>(Type.NAVIGATE);
