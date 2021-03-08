import { createAction } from "redux-actions";
import { HttpReqModel } from "@models/observable.model";
import { HTTP_REQUEST } from "@store/types";

export const Type = {
  HTTP_REQUEST,
};

export const httpRequest = createAction<HttpReqModel>(
  Type.HTTP_REQUEST
);
