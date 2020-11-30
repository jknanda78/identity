import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Field, FormModel, FormFields } from "@models/form.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: "95%",
      },
    },
  }),
);

type CompProps = {
  id: string;
  children: React.ReactNode;
  submitHandler(event: React.FormEvent<HTMLFormElement>): void;
};

const Component: React.FunctionComponent<CompProps> = (props) => {
  const { children, id: formId, submitHandler} = props;
  const classes = useStyles();

  return (
      <form
        id={formId}
        className={classes.root}
        onSubmit={submitHandler}
      >
        {children}
      </form>
  );
};

type FormProps = {
  actions: any;
  children: React.ReactNode;
  formManager: FormModel;
  id: string;
  onSubmit?: Function;
};

type FormState = {};

const setKeyValue = <OBJ extends FormFields, P extends keyof OBJ, V extends OBJ[P]>(key: P) => (obj: OBJ) => (val: V) =>
  obj[key] = val;

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    props.actions.createNewForm({
      formId: props.id,
    });
  }

  handleOnSubmit = (e: React.SyntheticEvent) => {
    const { actions, formManager, id: formId, onSubmit } = this.props;
    let formFields: Array<Field> = [];
    let isFormValid = false;
    e.preventDefault();
    actions.formSubmission({ formId });
    formManager.forms.forEach((form) => {
      if (form.formId === formId) {
        isFormValid = form.isValid;
        formFields = form.fields;
      }
    });

    const fields = {} as FormFields;

    formFields.forEach((field) => {
      const fieldId = field.fieldId;
      const fieldVal = field.value;
      setKeyValue(fieldId)(fields)(fieldVal);
    });

    // Call the parent handler
    typeof onSubmit === "function" && onSubmit(e, fields, isFormValid);
  };

  render() {
    return (<Component submitHandler={this.handleOnSubmit} {...this.props} />);
  }
}

export default Form;
