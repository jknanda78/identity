import React from "react";
import { UserProfileModel } from "@models/user-profile.model";
import Link from "@components/containers/link.container";
import homepic_1 from "../assets/img/home-1.jpg";
import homepic_2 from "../assets/img/home-2.jpg";
import homepic_3 from "../assets/img/home-3.jpg";
import homepic_4 from "../assets/img/home-4.jpg";

type HomepageProps = {
  actions: any;
  history: any;
  userProfileState: UserProfileModel;
};

const Home: React.FunctionComponent<HomepageProps> = ({ actions, history, userProfileState }) => {
  const { firstName } = userProfileState;
  const { push } = history;

  console.log("firstName::", firstName);

  // Credential Management
  if (navigator.credentials) {
    navigator.credentials.get({
      mediation: "required",
      password: true
    }).then((credential) => {
      console.log("Fetch credentials", credential);
      if (credential?.type === "password") {
        // auto-login
        actions.httpRequest({
          credentials: credential,
          method: "post",
          url: "/account/login"
        });
      }
    }).catch((e) => {
      console.log("Fetch credentials error", e);
    });
  }

  return (
    <div className="profile">
      <header>
        <h1>jsfunfoo &#123; &#125;</h1>
      </header>
      <section className="breadcrumbs">
        <p>
          Winter weather safety alert: Important store updates &amp; info.
        </p>
        <Link
          id="learnMoreLink"
          value="Learn more"
        />
      </section>
      <section className="main">
        <section className="left-panel">
          <div>
            <img src={homepic_1} alt="home pic" />
          </div>
          <div>
            <img src={homepic_2} alt="home pic" />
          </div>
          <div>
            <img src={homepic_3} alt="home pic" />
          </div>
          <div>
            <img src={homepic_4} alt="home pic" />
          </div>
        </section>
        <section className="side-panel">
          <ul>
            {firstName ? (
              <>
                <li>
                  {firstName}
                </li>
                <li>
                  <Link
                    id="trackOrderLink"
                    value="Track orders"
                  />
                </li>
                <li>
                  <Link
                    id="accountLink"
                    value="Account"
                  />  
                </li>
                <li>
                  <Link
                    id="helpLink"
                    value="Help"
                  />  
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    id="createAccountLink"
                    value="Sign in"
                    onClick={() => push("/login")}
                  />
                </li>
                <li>
                  <Link
                    id="trackOrderLink"
                    value="Track orders"
                  />
                </li>
                <li>
                  <Link
                    id="accountLink"
                    value="Account"
                  />  
                </li>
                <li>
                  <Link
                    id="helpLink"
                    value="Help"
                  />  
                </li>  
              </>
            )}
          </ul>
        </section>
      </section>
      <section className="footer">
        <footer>&#169; copyright 2021</footer>
      </section>
    </div>
  );
};

export default Home;
