import React from "react";
import InputField from "@components/containers/input-field.container";
import Layout from "@components/layout";
import { GlobalNotificationModel } from "@models/global-notification.model";
import { FormFields } from "@models/form.model";
import Link from "@components/containers/link.container";
import PrimaryButton from "@components/containers/primary-button.container";
import Form from "@components/containers/form.container";

type SignInProps = {
  actions: any;
  history: any;
  notification: GlobalNotificationModel
};

const SignInPage: React.FunctionComponent<SignInProps> = ({actions, history, notification}) => {
  const { notify, notifyMessage, notifyType } = notification;
  const { push } = history;
  const formId = "SIGN_IN";

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
          credentials: credential,
          method: "post",
          url: "/account/login",
          success: "UPDATE_PROFILE"
        });
      }
    }).catch((e) => {
      console.log("Fetch credentials error", e);
    });
  }

  // Form submit handler
  const handleOnSubmit = (e: React.SyntheticEvent, fields: FormFields, isFormValid: boolean) => {
    if (isFormValid) {
      // call the login api
      actions.httpRequest({
        data: {
          username: fields.email_address,
          password: fields.pwd
        },
        method: "post",
        url: "/account/login",
        success: "UPDATE_PROFILE"
      });
    }
  };

  return (
    <Layout
      notify={notify}
      notifyMessage={notifyMessage}
      notifyType={notifyType}
      title="Sign in to your account"
    >
      <div>
        <Form id={formId} onSubmit={handleOnSubmit}>
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
};

export default SignInPage;
