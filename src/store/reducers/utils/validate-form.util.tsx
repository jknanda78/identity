import { FormState } from "@models/form.model";
import { getValidator, validators } from "@store/utils/validators.util";

export default (forms: Array<FormState>, formId: string) => { 
  forms.forEach((form) => {
    // Find the formId from forms[]
    if (form.formId === formId) {
      form.isPristine = false;
      const fields = form.fields;
      let isFormValid = true;
      // Find the fieldId from fields[]
      fields.forEach((field) => {
          const fieldVal = field.value;
          const validator = field.validator;
          const error = getValidator(validator)(validators)(fieldVal);

          if (error) {
            field.error = error;
            field.hasError = true;
            isFormValid = false;
          } else {
            field.error = "";
            field.hasError = false;
          }
      });

      form.isValid = isFormValid;
    }
  });

  return forms;
};
