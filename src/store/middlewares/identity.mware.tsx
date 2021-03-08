import { Middleware } from "redux";
import {
  PREVENT_SILENT_ACCESS,
  SET_USER_PROFILE,
  STORE_PASSWORD_CREDENTIAL
} from "@store/types"

const Identity: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};

  if (type === STORE_PASSWORD_CREDENTIAL) {
    // Store credentials
    if (navigator.credentials && payload.credentials) {
      const { id, name, password } = payload.credentials;
      const signup_credentials = new PasswordCredential({
        id,
        name,
        password
       });
      navigator.credentials.store(signup_credentials)
        .then(() => {
          console.log("Storing credential for ", signup_credentials.id);
        })
        .catch((e) => {
          console.log("Error storing credentials", e);
        });
    }
  } else if (type === PREVENT_SILENT_ACCESS) {
    // Prevent silent access
    if (navigator.credentials) {
      navigator.credentials.preventSilentAccess()
        .then(() => {
          console.log("Silent access prevented. Mediation will be required for next credentials.get() call.");
        })
        .catch((e) => {
          console.log("Error preventing silent access.", e);
        })
    }
    // Update redux state
    store.dispatch({
      payload: {
        firstname: "",
        lastname: "",
        phonenumber: ""
      },
      type: SET_USER_PROFILE
    });
  }

  return next(action);
}

export default Identity;
