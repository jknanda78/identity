import React from "react";
import InputField from "@components/containers/input-field.container";
import Layout from "@components/layout";
import { GlobalNotificationModel } from "@models/global-notification.model";
import { FormFields } from "@models/form.model";
import Link from "@components/containers/link.container";
import PrimaryButton from "@components/containers/primary-button.container";
import Form from "@components/containers/form.container";
import { SET_USER_PROFILE } from "@store/types";

type SignInProps = {
  actions: any;
  history: any;
  notification: GlobalNotificationModel
};

class SignInPage extends React.Component<SignInProps> { 
  componentDidMount() {
    const { actions } = this.props;

    // Credential Management
    if (navigator.credentials) {
      navigator.credentials.get({
        mediation: "required",
        password: true
      }).then((credential) => {
        console.log("Fetch credentials", credential);
        if (credential?.type === "password") {
          // auto-login
          actions.httpRequest({
            data: {
              username: credential.id,
              password: credential.password
            },
            method: "post",
            url: "/account/login",
            success: SET_USER_PROFILE
          });
        }
      }).catch((e) => {
        console.log("Fetch credentials error", e);
      });
    }
  }

  handleOnSubmit = (e: React.SyntheticEvent, fields: FormFields, isFormValid: boolean) => {
    const { actions } = this.props;

    if (isFormValid) {
      // call the login api
      actions.httpRequest({
        data: {
          username: fields.email_address,
          password: fields.pwd
        },
        method: "post",
        url: "/account/login",
        success: SET_USER_PROFILE
      });
    }
  };

  render() {
    const { history, notification } = this.props;
    const { notify, notifyMessage, notifyType } = notification;
    const { push } = history;
    const formId = "SIGN_IN";

    return (
      <Layout
        notify={notify}
        notifyMessage={notifyMessage}
        notifyType={notifyType}
        title="Sign in to your account"
      >
        <div>
          <Form id={formId} onSubmit={this.handleOnSubmit}>
            <InputField
              autocomplete="off"
              formId={formId}
              id="email_address"
              label="Email address (required)"
              name="username"
              type="email"
              validator="email"
            />
            <InputField
              autocomplete="off"
              formId={formId}
              id="pwd"
              label="Password (required)"
              name="password"
              type="password"
              validator="default"
            />
            <PrimaryButton type="submit" id="sign_in" value="Sign in" />
            <Link
              id="createAccountLink"
              value="Create account"
              onClick={() => push("/createAccount")}
            />
          </Form>
        </div>
      </Layout>
    );
  }
}

export default SignInPage;
