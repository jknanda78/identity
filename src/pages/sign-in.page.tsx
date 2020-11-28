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

const SignInPage: React.FunctionComponent<SignInProps> = (props) => {
  const { notify, notifyMessage, notifyType } = props.notification;
  const { push } = props.history;
  const formId = "SIGN_IN";

  // Form submit handler
  const handleOnSubmit = (e: React.SyntheticEvent, fields: FormFields, isFormValid: boolean) => {
    if (isFormValid) {
      props.actions.httpRequest({
        data: {
          email: fields.email_address,
          password: fields.pwd
        },
        method: "post",
        url: "/account/login"
      });
    }
  };

  return (
    <Layout
      notify={notify}
      notifyMessage={notifyMessage}
      notifyType={notifyType}
      title="Sign in to your account 1234"
    >
      <div>
        <Form id={formId} onSubmit={handleOnSubmit}>
          <InputField
            formId={formId}
            id="email_address"
            label="Email address (required)"
            type="email"
            validator="email"
          />
          <InputField
            formId={formId}
            id="pwd"
            label="Password (required)"
            type="password"
            validator="default"
          />
          <PrimaryButton type="submit" id="sign_in" value="Sign in" />
          <Link
            type="button"
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
