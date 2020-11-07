export interface Field {
  error: string;
  fieldId: string;
  hasError: boolean;
  hasValue: boolean;
  validator: "email" | "password" | "default";
  value: string;
}

export interface FormState {
  fields: Array<Field>;
  formId: string;
  isPristine: boolean;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface FormModel {
  forms: Array<FormState>;
}

export interface FormPayload {
  forms: Array<FormState>;
}

export interface FormFields {
  [key: string]: string;
}
