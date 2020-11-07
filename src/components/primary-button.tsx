import React from "react";
import { HttpRequestModel } from "@models/observable.model";

type ButtonProps = {
  actions: any;
  observable: HttpRequestModel;
  onClick?: Function;
  id: string;
  type: "button" | "submit";
  value: string;
};

const PrimaryButton: React.FunctionComponent<ButtonProps> = (props) => {
  const { actions, onClick, id, type, value } = props;
  const { isSubmitting } = props.observable;
  const onClickHandler = (e: React.SyntheticEvent) => {
    actions.unsetGlobalNotification();
    typeof onClick === "function" && onClick(e);
  };
  return (
    <div className="primary">
      <button
        type={type}
        id={id}
        value={value}
        onClick={onClickHandler}
        disabled={isSubmitting ? true : undefined}>
          <span className={isSubmitting ? "spinner-active" : "spinner-inactive"}></span> {value}
      </button>
    </div>
  );
};

export default PrimaryButton;
