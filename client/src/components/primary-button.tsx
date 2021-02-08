import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { HttpRequestModel } from "@models/observable.model";

type ButtonProps = {
  actions: any;
  observable: HttpRequestModel;
  onClick?: Function;
  id: string;
  type: "button" | "submit";
  value: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      marginBottom: 10
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
      width: "100%"
    },
    button: {
      color: "#fff",
      backgroundColor: "#0065ff",
      width: "100%",
      padding: 12,
      '&:hover': {
        backgroundColor: "#013f9e"
      }
    },
    buttonProgress: {
      color: "#3f51b5",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

const PrimaryButton: React.FunctionComponent<ButtonProps> = (props) => {
  const { actions, onClick, id, type, value } = props;
  const { isSubmitting } = props.observable;
  const onClickHandler = (e: React.SyntheticEvent) => {
    actions.unsetGlobalNotification();
    typeof onClick === "function" && onClick(e);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          color="primary"
          className={classes.button}
          disabled={isSubmitting ? true : undefined}
          id={id}
          onClick={onClickHandler}
          type={type}
          value={value}
          variant="contained"
        >
          {value}
        </Button>
        {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};

export default PrimaryButton;
