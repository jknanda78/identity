import axios from "axios";

// Success handler
const successHandler = (res: any, actions: any) => {
  const { challenge, ...data } = res?.data || {};

  if (challenge) {
    actions.setUserProfile(data); // @todo - Need to move, not common
    actions.navigateTo({ challenge });
  }
};

// Error handler
const errorHandler = (err: any, actions: any) => {
  const { message, alert } = err?.response?.data || {};

  actions.setGlobalNotification({
    notifyType: alert,
    notifyMessage: message,
  });
};

export default {
  loginApi: (email: String, password: String, actions: any) => {
    actions.formSubmission();
    actions.unsetGlobalNotification();
    return axios
      .post("/account/login", {
        email,
        password,
      })
      .then((res) => successHandler(res, actions))
      .catch((err) => errorHandler(err, actions));
  },
  logoutApi: () =>
    axios
      .post(
        "/account/logout",
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MWYwZDY1Zi02ODc1LTQ2ZWYtODQ4Yi00YWUxMzQ1YjIzNjkiLCJpYXQiOjE1OTg4NTI1Mzd9.UiqHv63mNo3c0L_hiLpljMHegTtmS7yHBjpTsIvPayM",
          },
        }
      )
      .catch((e) => e),
  createAccountApi: (
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    actions: any
  ) => {
    actions.unsetGloablNotification();
    return axios
      .post("/account/createAccount", {
        firstName,
        lastName,
        email,
        pwd,
      })
      .catch((err) => errorHandler(err, actions));
  },
};
