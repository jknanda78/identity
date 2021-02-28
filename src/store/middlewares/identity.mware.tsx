import { Middleware } from "redux";
import { SET_USER_PROFILE } from "../types"

const Identity: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};
  const { data, res } = payload;

  if (type === "CREATE_PASSWORD_CREDENTIAL") {
    if (navigator.credentials) {
      const signup_credentials = new PasswordCredential({
        id: data.email,
        name: data.email,
        password: data.pwd
       });
      navigator.credentials.store(signup_credentials)
        .then(() => {
          console.log("Storing credential for ", signup_credentials.id);
        })
        .catch((e) => {
          console.log("Error storing credentials", e);
        });
    }
  } else if (type === "USER_LOGOUT") {
    if (navigator.credentials) {
      navigator.credentials.preventSilentAccess()
        .then(() => {
          console.log("Silent access prevented. Mediation will be required for next credentials.get() call.");
        })
        .catch((e) => {
          console.log("Error preventing silent access.", e);
        })
    }
  } else if (type === "UPDATE_PROFILE") {
    const { firstname, lastname, phonenumber } = res.data;
    store.dispatch({
      payload: {
        firstName: firstname,
        lastName: lastname,
        phoneNumber: phonenumber
      },
      type: SET_USER_PROFILE
    });
  }

  return next(action);
}

export default Identity;
