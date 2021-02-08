import React from "react";
import Layout from "@components/layout";
import InputField from "@components/containers/input-field.container";
import { GlobalNotificationModel } from "@models/global-notification.model";
import Link from "@components/containers/link.container";
import PrimaryButton from "@components/containers/primary-button.container";
import Form from "@components/containers/form.container";
import { FormFields } from "@models/form.model";

type CreateAccountProps = {
  actions: any;
  history: any;
  notification: GlobalNotificationModel;
};

const CreateAccount: React.FunctionComponent<CreateAccountProps> = (props) => {
  const { push } = props.history;
  const formId = "CREATE_ACCOUNT";

  // Form submit handler
  const handleOnSubmit = (e: React.SyntheticEvent, fields: FormFields, isFormValid: boolean) => {
    if (isFormValid) {
      props.actions.httpRequest({
        data: {
          firstName: fields.first_name,
          lastName: fields.last_name,
          email: fields.email_address,
          pwd: fields.pwd
        },
        method: "post",
        url: "/account/createAccount",
        success: "CREATE_PASSWORD_CREDENTIAL"
      });
    }
  };

  const { notify, notifyMessage, notifyType } = props.notification;

  return (
    <Layout
      notify={notify}
      notifyMessage={notifyMessage}
      notifyType={notifyType}
      title="Create account"
    >
      <div>
        <Form id={formId} onSubmit={handleOnSubmit}>
          <InputField
            formId={formId}
            id="first_name"
            label="First name (required)"
            type="text"
            validator="default"
          />
          <InputField
            formId={formId}
            id="last_name"
            label="Last name (required)"
            type="text"
            validator="default"
          />
          <InputField
            autocomplete="username"
            formId={formId}
            id="email_address"
            label="Email address (required)"
            type="email"
            validator="email"
          />
          <InputField
            autocomplete="new-password"
            formId={formId}
            id="pwd"
            label="Password (required)"
            type="password"
            validator="password"
          />
          <PrimaryButton type="submit" id="create_account" value="Create Account" />
          <Link
            id="signInLink"
            value="Sign in"
            onClick={() => push("/login")}
          />
        </Form>
      </div>
    </Layout>
  );
};

export default CreateAccount;
