import { combineReducers } from "redux";
import { routerReducer as router, RouterState } from "react-router-redux";
import {
  userProfileReducer,
  State as UserProfileState,
} from "./user-profile.reducer";
import {
  globalNotificationReducer,
  State as GlobalNotificationState,
} from "./global-notification.reducer";
import {
  observableReducer,
  State as ObservableState
} from "./observable.reducer";
import { formReducer, State as FormState } from "./form.reducer";

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  formManager: FormState;
  globalNotification: GlobalNotificationState;
  observable: ObservableState;
  router: RouterState;
  userProfile: UserProfileState;
}

export const rootReducer = combineReducers<RootState>({
  formManager: formReducer as any,
  globalNotification: globalNotificationReducer as any,
  observable: observableReducer as any,
  router,
  userProfile: userProfileReducer as any,
});
