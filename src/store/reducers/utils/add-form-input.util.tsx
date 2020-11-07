import {
  Field,
  FormState,
} from "@models/form.model";

const getKeyValue = <FS extends FormState, P extends keyof FS>(key: P) => (obj: FS) =>
  obj[key];

const setKeyValue = <FS extends FormState, P extends keyof FS, V extends FS[P]>(key: P) => (obj: FS) => (val: V) =>
  obj[key] = val;

const deepCopyForms = (forms: Array<FormState>) => {
  const clonedForms = [] as Array<FormState>;

  forms.forEach((form: FormState) => {
    const newItem = {} as FormState;
    let prop: keyof FormState;

    for (prop in form) {
      const propValue = getKeyValue(prop)(form) as any;
      if (propValue.constructor === Array) {
        const val: Array<Field> = [...propValue];
        setKeyValue(prop)(newItem)(val);
      } else {
        setKeyValue(prop)(newItem)(propValue);
      }
    }

    clonedForms.push(newItem);
  });

  return clonedForms;
};

export default (forms: Array<FormState>, formId: string, newField: Field) => {
  forms.forEach((form) => {
    // Find the formId from forms[]
    if (form.formId === formId) {
      form.fields = [newField, ...form.fields];
    }
  });

  return forms;
};
