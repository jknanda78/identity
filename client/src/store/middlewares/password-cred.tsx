import { Middleware } from "redux";

const PasswordCred: Middleware = (store: any) => (next: any) => (action: any) => {
  const { type, payload = {} } = action || {};
  const { data } = payload;

  if (type === "CREATE_PASSWORD_CREDENTIAL") {
    if (window.PasswordCredential) {
      const signin_credentials = new window.PasswordCredential({
        id: data.email,
        name: data.email,
        password: data.password
       });
      navigator.credentials.store(signin_credentials);
    }
  }

  return next(action);
}

export default PasswordCred;
