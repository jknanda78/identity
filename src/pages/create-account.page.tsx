import React from "react";
import Layout from "@components/layout";
import InputField from "@components/containers/input-field.container";
import { GlobalNotificationModel } from "@models/global-notification.model";
import Link from "@components/containers/link.container";

type CreateAccountProps = {
  actions: any;
  history: any;
  notification: GlobalNotificationModel;
};

const CreateAccount: React.FunctionComponent<CreateAccountProps> = (props) => {
  const { push } = props.history;

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // if (firstName && lastName && email && password) {
    //   const response = await apis.createAccountApi(
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //     props.actions
    //   );
    // }
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
        <form onSubmit={handleOnSubmit}>
          <InputField
            id="first_name"
            label="First name (required)"
            type="text"
          />
          <InputField
            id="last_name"
            label="Last name (required)"
            type="text"
          />
          <InputField
            id="email_address"
            label="Email address (required)"
            type="email"
            validator="email"
          />
          <InputField
            id="pwd"
            label="Password (required)"
            type="password"
            validator="password"
          />
          <div className="primary">
            <button type="submit" id="create_account" value="Create Account">
              Create Account
            </button>
          </div>
          <Link
            type="button"
            id="signInLink"
            value="Sign in"
            onClick={() => push("/login")}
          />
        </form>
      </div>
    </Layout>
  );
};

export default CreateAccount;
