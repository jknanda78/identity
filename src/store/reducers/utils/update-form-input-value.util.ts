import { FormState } from "@models/form.model"; 

export default (forms: Array<FormState>, formId: string, fieldId: string, fieldVal: string) => { 
  forms.forEach((form) => {
    // Find the formId from forms[]
    if (form.formId === formId) {
      form.isPristine = false;
      const fields = form.fields;
      // Find the fieldId from fields[]
      fields.forEach((field) => {
        if (field.fieldId === fieldId) {
          if (fieldVal.length) {
            field.hasValue = true;
            field.value = fieldVal;
          } else {
            field.hasValue = false;
            field.value = "";
          }
        }
      });
    }
  });

  return forms;
};
