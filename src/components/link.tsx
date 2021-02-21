import React from "react";
import ButtonLink from '@material-ui/core/Link';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type LinkProps = {
  actions: any;
  onClick?: Function;
  id: string;
  value: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    }
  }),
);

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const { actions, onClick, id, value } = props;
  const onClickHandler = (e: React.SyntheticEvent) => {
    actions.unsetGlobalNotification();
    typeof onClick === "function" && onClick(e);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonLink
        id={id}
        component="button"
        variant="body2"
        onClick={onClickHandler}
      >
        {value}
      </ButtonLink>
    </div>
  );
};

export default Link;
