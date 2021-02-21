import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import CreateAccountPage from "@pages/create-account.page";
import { RootState } from "@reducers/index";
import * as notifyActions from "@actions/global-notification.action";
import * as observableActions from "@actions/observable.action";

const actions: any = Object.assign({},
  notifyActions,
  observableActions);

const mapSateToProps = (state: RootState) => ({
  notification: state.globalNotification,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(CreateAccountPage);
