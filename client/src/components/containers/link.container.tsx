import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Link from "@components/link";
import * as notifyActions from "@actions/global-notification.action";

// Add all the actions
const actions: any = Object.assign({}, notifyActions);

const mapSateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(Link);
