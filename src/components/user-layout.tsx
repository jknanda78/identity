import React from "react";
import "@styles/user-layout.css";

type LayoutProps = {
  children: React.ReactNode;
  notify: boolean;
  notifyMessage: string;
  notifyType: string;
  title: string;
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
        <footer>&#169; copyright 2021</footer>
      </section>
    </div>
  );
};

export default UserLayout;
