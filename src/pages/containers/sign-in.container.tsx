import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "@reducers/index";
import SignInPage from "@pages/sign-in.page";
import * as notifyActions from "@actions/global-notification.action";
import * as formActions from "@actions/form.action";
import * as observableActions from "@actions/observable.action";

// Add all the actions
const actions: any = Object.assign(
  {},
  formActions,
  notifyActions,
  observableActions
);

const mapSateToProps = (state: RootState) => ({
  notification: state.globalNotification
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(SignInPage);
