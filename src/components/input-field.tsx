import React from "react";
import TextField  from "@material-ui/core/TextField";
import { FormModel } from "@models/form.model"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type FormInputProps = {
  actions: any;
  autocomplete?: string;
  editable?: boolean;
  formManager: FormModel;
  formId?: string;
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  type: "text" | "password" | "email";
  validator?: "email" | "password" | "default";
  value?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 5
    }
  }),
);

type CompProps = {
  error?: boolean;
  autoComplete?: string;
  id: string;
  type: "text" | "password" | "email";
  label: string;
  placeholder?: string;
  blurHandler(event: React.FocusEvent<HTMLInputElement>): void;
  changeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Component: React.FunctionComponent<CompProps> = (props) => {
  const { blurHandler, changeHandler, ...restofProps } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        {...restofProps}
        onBlur={blurHandler}
        onChange={changeHandler}
        variant="outlined"
      />
    </div>
  );
};

export default class FormInput extends React.Component<FormInputProps> {
  constructor(props: FormInputProps) {
    super(props);
    const { formId, id: fieldId, validator } = props;

    props.actions.addNewInput({
      formId,
      fieldId,
      validator
    });
  }

  handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { actions, formId, id: fieldId } = this.props;

    actions.onBlurInput({
      formId,
      fieldId
    });
  };

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { actions, formId, id: fieldId } = this.props;
    actions.onChangeInput({
      formId,
      fieldId,
      value: e.currentTarget.value
    });
  };

  render() {
    const {
      autocomplete,
      formId,
      formManager,
      editable = true,
      id,
      label,
      placeholder = "",
      type,
      value = "",
    } = this.props;
    const findError: Function = () => {
      let error: string = "";

      formManager.forms.forEach((form) => {
        if (form.formId === formId) {
          const fields = form.fields;
          fields.forEach((field) => {
            if (field.fieldId === id && field.hasError) {
              error = field.error;
            }
          });
        }
      });

      return error;
    };
    const fieldError: string = findError();

    return editable ? (
      <Component
        {...(fieldError ? { error: true } : {})}
        autoComplete={autocomplete}
        type={type}
        id={id}
        label={label}
        placeholder={placeholder}
        blurHandler={this.handleOnBlur}
        changeHandler={this.handleOnChange}
      />
    ) : (
      <div>
        <label htmlFor={id}>{label}</label>
        <p>{value}</p>
      </div>
    );
  }
}
