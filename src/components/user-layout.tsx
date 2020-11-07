import React from "react";
import "@styles/normalize.css";
import "@styles/user-layout.css";
import { title } from "process";

type LayoutProps = {
  children: React.ReactNode;
  notify: boolean;
  notifyMessage: String;
  notifyType: String;
  title: String;
};

const UserLayout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, notifyMessage, notifyType, title } = props;
  return (
    <div className="profile">
      <header>
        <h1>&#123; .js &#125;</h1>
      </header>
      <section className="breadcrumbs">
        <h2>{title}</h2>
      </section>
      {notifyMessage ? (
        <section className="notification">
          <div className={`message ${notifyType}`}>{notifyMessage}</div>
        </section>
      ) : null}
      <section className="main">{children}</section>
      <section className="footer">
        <footer>&#169; copyright 2020</footer>
      </section>
    </div>
  );
};

export default UserLayout;
