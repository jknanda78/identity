import React from "react";
import InputField from "@components/containers/input-field.container";
import { UserProfileModel } from "@models/user-profile.model";
import { GlobalNotificationModel } from "@models/global-notification.model";
import UserLayout from "@components/user-layout";
import "@styles/user-profile.css";

type ProfileProps = {
  actions: any;
  notification: GlobalNotificationModel;
  userProfileState: UserProfileModel;
};

type ProfileState = {
  nameEditable: boolean;
  emailEditable: boolean;
  phoneEditable: boolean;
};

export class UserProfilePage extends React.Component<
  ProfileProps,
  ProfileState
> {
  state = {
    nameEditable: false,
    emailEditable: false,
    phoneEditable: false,
  };

  toggleEditName = (e: React.SyntheticEvent, edit: boolean) => {
    this.setState({
      nameEditable: edit,
    });
  };

  toggleEditEmail = (e: React.SyntheticEvent, edit: boolean) => {
    this.setState({
      emailEditable: edit,
    });
  };

  toggleEditPhone = (e: React.SyntheticEvent, edit: boolean) => {
    this.setState({
      phoneEditable: edit,
    });
  };

  render() {
    const { userProfileState, notification } = this.props;
    const { firstName, lastName, email, phoneNumber } = userProfileState;
    const { notify, notifyMessage, notifyType } = notification;

    return (
      <UserLayout
        notify={notify}
        notifyMessage={notifyMessage}
        notifyType={notifyType}
        title="Update profile"
      >
        <div className="editProfile">
          <ul>
            <li>
              <form>
                <InputField
                  editable={this.state.nameEditable}
                  id="first_name"
                  label="First name (required)"
                  type="text"
                  value={firstName}
                />
                <InputField
                  editable={this.state.nameEditable}
                  id="last_name"
                  label="Last name (required)"
                  type="text"
                  value={lastName}
                />
                <div className="buttons">
                  {this.state.nameEditable ? (
                    <>
                      <div className="secondary">
                        <button
                          type="button"
                          id="cancelEditName"
                          value="Cancel"
                          onClick={(e: React.SyntheticEvent) =>
                            this.toggleEditName(e, false)
                          }
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="primary">
                        <button type="submit" id="updateName" value="Submit">
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="buttonAsLink">
                      <button
                        type="button"
                        id="editName"
                        value="Edit"
                        onClick={(e: React.SyntheticEvent) =>
                          this.toggleEditName(e, true)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </li>
            <li>
              <form>
                <InputField
                  editable={this.state.emailEditable}
                  id="email_address"
                  label="Email address (required)"
                  type="email"
                  value={email}
                />
                <div className="buttons">
                  {this.state.emailEditable ? (
                    <>
                      <div className="secondary">
                        <button
                          type="button"
                          id="cancelEditEmail"
                          value="Cancel"
                          onClick={(e: React.SyntheticEvent) =>
                            this.toggleEditEmail(e, false)
                          }
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="primary">
                        <button type="submit" id="updateEmail" value="Submit">
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="buttonAsLink">
                      <button
                        type="button"
                        id="editEmail"
                        value="Edit"
                        onClick={(e: React.SyntheticEvent) =>
                          this.toggleEditEmail(e, true)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </li>
            <li>
              <form>
                <InputField
                  editable={this.state.phoneEditable}
                  id="phone_number"
                  label="Phone number (required)"
                  type="email"
                  value={phoneNumber}
                />
                <div className="buttons">
                  {this.state.phoneEditable ? (
                    <>
                      <div className="secondary">
                        <button
                          type="button"
                          id="cancelEditPhone"
                          value="Cancel"
                          onClick={(e: React.SyntheticEvent) =>
                            this.toggleEditPhone(e, false)
                          }
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="primary">
                        <button type="submit" id="updatePhone" value="Submit">
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="buttonAsLink">
                      <button
                        type="button"
                        id="editPhoneNumber"
                        value="Edit"
                        onClick={(e: React.SyntheticEvent) =>
                          this.toggleEditPhone(e, true)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </li>
          </ul>
        </div>
      </UserLayout>
    );
  }
}
