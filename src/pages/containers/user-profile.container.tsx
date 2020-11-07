import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { UserProfilePage } from "@pages/user-profile.page";
import { RootState } from "@reducers/index";
import * as notifyActions from "@actions/global-notification.action";

// Add all the actions
const actions: any = Object.assign({}, notifyActions);

const mapSateToProps = (state: RootState) => ({
  notification: state.globalNotification,
  userProfileState: state.userProfile,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(UserProfilePage);
