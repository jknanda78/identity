// REGEX TYPES
const VALID_EMAIL_REGX = "VALID_EMAIL_REGX";
const PASS_LENGTH_REGX = "PASS_LENGTH_REGX";
const VALID_PASS_REGX = "VALID_PASS_REGEX";

// ERROR TYPES
const VALID_EMAIL_ERR = "ENTER_VALID_EMAIL";
const PASS_LENGTH_ERR = "PASS_LENGTH_NOT_MET_ERR";
const VALID_PASS_ERR = "VALID_PASS_ERR";
const EMPTY_FIELD_ERR = "EMPTY_FIELD_ERR";

// FORM INPUT TYPES
const EMAIL = "email";
const PASSWORD = "password";
const DEFAULT = "default";

type regexValidators = {
  [VALID_EMAIL_REGX]: RegExp;
  [PASS_LENGTH_REGX]: RegExp;
  [VALID_PASS_REGX]: RegExp;
};

const regex: regexValidators = {
  [VALID_EMAIL_REGX]: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  [PASS_LENGTH_REGX]: /^.{7,15}$/,
  [VALID_PASS_REGX]: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).*$/
};

type validationErrors = {
  [VALID_EMAIL_ERR]: string;
  [PASS_LENGTH_ERR]: string;
  [VALID_PASS_ERR]: string;
  [EMPTY_FIELD_ERR]: string;
};

const errors: validationErrors = {
  [VALID_EMAIL_ERR]: "Please enter a valid email address.",
  [PASS_LENGTH_ERR]: "Password must be 9 to 15 characters.",
  [VALID_PASS_ERR]: "Must have at least 1 number, 1 uppercase and 1 special character.",
  [EMPTY_FIELD_ERR]: "Please enter a valid "
};

export type validateFormInput = {
  [EMAIL]: Function;
  [PASSWORD]: Function;
  [DEFAULT]: Function;
};

export const validators: validateFormInput = {
  [EMAIL]: (input: string) => {
    if (!regex[VALID_EMAIL_REGX].test(input)) {
      return errors[VALID_EMAIL_ERR];
    }
  },
  [PASSWORD]: (input: string) => {
    if (!regex[PASS_LENGTH_REGX].test(input)) {
      return errors[PASS_LENGTH_ERR];
    } else if (!regex[VALID_PASS_REGX].test(input)) {
      return errors[VALID_PASS_ERR];
    }
  },
  [DEFAULT]: (input: string) => {
    if (input.length === 0) {
      return errors[EMPTY_FIELD_ERR];
    }
  }
};

export const getValidator = <V extends validateFormInput, P extends keyof V>(key: P) => (obj: V) =>
  obj[key];
