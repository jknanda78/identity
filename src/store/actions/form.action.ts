import { createAction } from "redux-actions";
import { FormPayload } from "../models/form.model";
import {
  ADD_NEW_INPUT_FIELD,
  CREATE_NEW_FORM,
  CLEAR_FORM,
  ONBLUR_INPUT_FIELD,
  ONCHANGE_INPUT_FIELD,
  SUBMIT_FORM
} from "../types";

export const Type = {
  ADD_NEW_INPUT_FIELD,
  CREATE_NEW_FORM,
  CLEAR_FORM,
  ONBLUR_INPUT_FIELD,
  ONCHANGE_INPUT_FIELD,
  SUBMIT_FORM,
};

export const addNewInput = createAction<FormPayload>(
  Type.ADD_NEW_INPUT_FIELD
);

export const createNewForm = createAction<FormPayload>(
  Type.CREATE_NEW_FORM
);

export const onBlurInput = createAction<FormPayload>(
  Type.ONBLUR_INPUT_FIELD
);

export const onChangeInput = createAction<FormPayload>(
  Type.ONCHANGE_INPUT_FIELD
);

export const onFormSubmit = createAction<FormPayload>(
  Type.ONCHANGE_INPUT_FIELD
);

export const clearForm = createAction<FormPayload>(
  Type.CLEAR_FORM
);

export const formSubmission = createAction<FormPayload>(
  Type.SUBMIT_FORM
);
