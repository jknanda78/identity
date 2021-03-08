import React from "react";
import { UserProfileModel } from "@models/user-profile.model";
import Link from "@components/containers/link.container";
import { PREVENT_SILENT_ACCESS, SET_USER_PROFILE } from "@store/types";
import homepic_1 from "../assets/img/home-1.jpg";
import homepic_2 from "../assets/img/home-2.jpg";
import homepic_3 from "../assets/img/home-3.jpg";
import homepic_4 from "../assets/img/home-4.jpg";

type HomepageProps = {
  actions: any;
  history: any;
  userProfileState: UserProfileModel;
};

class Home extends React.Component<HomepageProps> {
  autoSignIn = () => {
    const { actions } = this.props;
    // Get credentials | Credential Management API
    if (navigator.credentials) {
      navigator.credentials.get({
        mediation: "required",
        password: true
      }).then((credential) => {
        if (credential?.type === "password") {
          // Auto-login
          actions.httpRequest({
            data: {
              username: credential.id,
              password: credential.password
            },
            method: "post",
            url: "/account/login",
            success: SET_USER_PROFILE
          });
        }
      }).catch((e) => {
        console.log("Fetch credentials error", e);
      });
    }
  };

  componentDidMount() {
    if (!this.props.userProfileState.firstname) {
      this.autoSignIn();
    }
  }

  shouldComponentUpdate(nexProps: any) {
    if (this.props.userProfileState.firstname !== nexProps.userProfileState.firstname) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (!this.props.userProfileState.firstname) {
      this.autoSignIn();
    }
  }

  handleOnLogout = () => {
    this.props.actions.httpRequest({
      data: {},
      method: "post",
      url: "/account/logout",
      success: PREVENT_SILENT_ACCESS
    });
  };

  render() {
    const { history, userProfileState } = this.props;
    const { firstname } = userProfileState;
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
              {
                firstname ? (
                  <li>
                    <div className="greet-user">Welcome {firstname}</div>
                  </li>
                ) : (
                  <li>
                    <Link
                      id="createAccountLink"
                      value="Sign in"
                      onClick={() => history.push("/login")}
                    />
                  </li>
                )
              }
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
              {
                firstname ? (
                  <Link
                    id="signoutLink"
                    value="Sign out"
                    onClick={this.handleOnLogout}
                  />
                ) : null
              }
            </ul>
          </section>
        </section>
        <section className="footer">
          <footer>&#169; copyright 2021</footer>
        </section>
      </div>
    );
  }
}

export default Home;
