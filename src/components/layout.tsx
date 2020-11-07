import React from "react";
import { CSSTransition } from "react-transition-group";
import "@styles/normalize.css";
import "@styles/layout.css";

type LayoutProps = {
  children: React.ReactNode;
  notify: boolean;
  notifyMessage: String;
  notifyType: String;
  title: String;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, notify, notifyMessage, notifyType, title } = props;
  return (
    <div className="standard">
      <div className="wrapper">
        <section className="logo">
          <div>&#123; .js &#125;</div>
        </section>
        <section className="notify">
          <CSSTransition
            in={notify}
            timeout={500}
            classNames="display"
            unmountOnExit
          >
            <div className="notification">
              <div className={`message ${notifyType}`}>{notifyMessage}</div>
            </div>
          </CSSTransition>
        </section>
        <header className="header">
          <h1>{title}</h1>
        </header>
        <section className="main">{children}</section>
        <section className="footer">
          <footer>&#169; copyright 2020</footer>
        </section>
      </div>
    </div>
  );
};

export default Layout;
