import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "@reducers/index";
import HomePage from "@pages/home.page";
import * as observableActions from "@actions/observable.action";

// Add all the actions
const actions: any = Object.assign({}, observableActions);

const mapSateToProps = (state: RootState) => ({
  userProfileState: state.userProfile
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(HomePage);
