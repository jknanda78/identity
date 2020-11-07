import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "@reducers/index";
import Form from "@components/form";
import * as notifyActions from "@actions/global-notification.action";
import * as formActions from "@actions/form.action";

// Add all the actions
const actions: any = Object.assign({}, formActions, notifyActions);

const mapSateToProps = (state: RootState) => ({
  formManager: state.formManager
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapSateToProps, mapDispatchToProps)(Form);
