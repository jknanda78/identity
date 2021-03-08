import { createAction } from "redux-actions";
import { STORE_PASSWORD_CREDENTIAL } from "@store/types";
import { CredModel } from "@models/cred.model";

export const Type = {
  STORE_PASSWORD_CREDENTIAL,
};

export const storePwdCredential = createAction<CredModel>(
  Type.STORE_PASSWORD_CREDENTIAL
);
