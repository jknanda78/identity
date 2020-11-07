import React from "react";
import { FormModel } from "@models/form.model"
import "@styles/input-field.css";

type FormInputProps = {
  actions: any;
  editable?: boolean;
  formManager: FormModel;
  formId?: string;
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "password" | "email";
  validator?: "email" | "password" | "default";
  value?: string;
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

  handleOnBlur = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { actions, formId, id: fieldId } = this.props;

    actions.onBlurInput({
      formId,
      fieldId
    });
  };

  handleOnChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { actions, formId, id: fieldId } = this.props;

    actions.onChangeInput({
      formId,
      fieldId,
      value: e.currentTarget.value
    });
  };

  render() {
    const {
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
      <div>
        <label htmlFor={id} className={fieldError ? "error" : ""}>{label}</label>
        <p>
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
          />
        </p>
        <p className="field-error">
          {fieldError ? fieldError : ""}
        </p>
      </div>
    ) : (
      <div>
        <label htmlFor={id}>{label}</label>
        <p>{value}</p>
      </div>
    );
  }
}
