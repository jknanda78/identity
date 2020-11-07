import React from "react";

type LinkProps = {
  actions: any;
  onClick?: Function;
  id: string;
  type: "button" | "submit";
  value: string;
};

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const { actions, onClick, id, type, value } = props;
  const onClickHandler = (e: React.SyntheticEvent) => {
    actions.unsetGlobalNotification();
    typeof onClick === "function" && onClick(e);
  };
  return (
    <div className="buttonAsLink">
      <button type={type} id={id} value={value} onClick={onClickHandler}>
        {value}
      </button>
    </div>
  );
};

export default Link;
