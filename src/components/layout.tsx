import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import "@styles/layout.css";

const useStyls = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

type NotifyProps = {
  message: string;
  type: "error" | "warning" | "success" | "info";
};

const Notify: React.FunctionComponent<NotifyProps> = (props) => {
  const { message, type } = props;

  return (
    <div className={useStyls().root}>
      <Alert severity={type}>
        {message}
      </Alert>
    </div>
  )
}

type LayoutProps = {
  children: React.ReactNode;
  notify: boolean;
  notifyMessage: string;
  notifyType: "error" | "warning" | "success" | "info";
  title: string;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, notify, notifyMessage, notifyType, title } = props;
  return (
    <div className="standard">
      <div className="wrapper">
        <section className="logo">
          <div>jsfunfoo &#123; &#125;</div>
        </section>
        <section className="notify">
          { notify ? <Notify type={notifyType} message={notifyMessage} /> : null }
        </section>
        <main>
          <header className="header">
            <h1>{title}</h1>
          </header>
          <section className="content">{children}</section>
        </main>
        <section className="footer">
          <footer>&#169; copyright 2021</footer>
        </section>
      </div>
    </div>
  );
};

export default Layout;
