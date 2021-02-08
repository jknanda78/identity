import { handleActions, Action } from "redux-actions";
import {
  FormModel,
  FormPayload,
  FormState,
} from "@models/form.model";
import {
  ADD_NEW_INPUT_FIELD,
  CREATE_NEW_FORM,
  CLEAR_FORM,
  ONBLUR_INPUT_FIELD,
  ONCHANGE_INPUT_FIELD,
  SUBMIT_FORM
} from "@store/types";
// UTILS
import addFormInput from "@reducers/utils/add-form-input.util";
import updateFormInputVal from "@reducers/utils/update-form-input-value.util";
import validateFormInput from "@reducers/utils/validate-form-input.util";
import validateForm from "@reducers/utils/validate-form.util";

export type State = {
  forms: Array<FormState>;
};

const initialState: State = {
  forms: []
};

export const formReducer = handleActions<
  State,
  FormModel
>(
  {
    [ADD_NEW_INPUT_FIELD]: (
      state: State,
      action: Action<FormPayload>
    ) => {
      const { formId, fieldId, validator } = action.payload as any;
      const newFormInput = {
        error: "",
        fieldId,
        hasError: false,
        hasValue: false,
        validator,
        value: ""
      };
      const newFormsState = addFormInput(state.forms, formId, newFormInput);
      return {forms: [...newFormsState]};
    },
    [CREATE_NEW_FORM]: (
      state: State,
      action: Action<FormPayload>
    ) => {
      const { formId } = action.payload as any;
      const newForm = {
        fields: [],
        formId,
        isPristine: true,
        isSubmitting: false,
        isValid: false
      };

      return { forms: [ newForm, ...state.forms ] };
    },
    [ONBLUR_INPUT_FIELD]: (
      state: State,
      action: Action<Object>
    ) => {
      const { formId, fieldId } = action.payload as any;
      const newFormsState = validateFormInput(state.forms, formId, fieldId);
      return {forms: [...newFormsState]};
    },
    [ONCHANGE_INPUT_FIELD]: (
      state: State,
      action: Action<Object>
    ) => {
      const { formId, fieldId, value } = action.payload as any;
      const newFormsState = updateFormInputVal(state.forms, formId, fieldId, value);
      return {forms: [...newFormsState]};
    },
    [SUBMIT_FORM]: (
      state: State,
      action: Action<FormPayload>
    ) => {
      const { formId } = action.payload as any;
      const newFormsState = validateForm(state.forms, formId);
      return {forms: [...newFormsState]};
    },
    [CLEAR_FORM]: (state: State) => {
      return Object.assign({}, state, {});
    },
  },
  initialState
);
