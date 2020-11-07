import { createAction } from "redux-actions";
import { HttpReqPayload } from "@models/observable.model";
import { HTTP_REQUEST } from "@types";

export const Type = {
  HTTP_REQUEST,
};

export const httpRequest = createAction<HttpReqPayload>(
  Type.HTTP_REQUEST
);
