import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "@reducers/index";
import PrimaryButton from "@components/primary-button";
import * as notifyActions from "@actions/global-notification.action";

// Add all the actions
const actions: any = Object.assign({}, notifyActions);

const mapSateToProps = (state: RootState) => ({
  observable: state.observable
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(PrimaryButton);
