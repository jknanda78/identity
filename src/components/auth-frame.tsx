import React, { useEffect } from "react";

type Modes = "guestSignin" | "guestSignup";

type GuestSignupInfo = {
  mode?: Modes;
  email: string;
  firstName: string;
  lastName: string;
};

type GuestSigninInfo = {
  mode?: Modes;
  email: string;
};

type GuestInfo = GuestSignupInfo | GuestSigninInfo;

type FrameProps = {
  mode: Modes;
  guest?: GuestInfo;
  title: string;
};

export const isGuestSignup = (info: GuestInfo): info is GuestSignupInfo => {
  return (info as GuestSignupInfo).mode === "guestSignup";
}

export const createCookie = (cookieVal: string) => {
  const expireInMins = 5;
  const expires = new Date();
  expires.setTime(expires.getTime() + (60 * expireInMins * 1000));

  return `guest_cu=${cookieVal};path=/;domain=apps.jsfunfoo.com;samesite=lax;expires=${expires.toUTCString()};`;
}

export const withDropCookie = <CompProps extends FrameProps>(WrappedComponent: React.ComponentType<FrameProps>) => {
  const dropCookie = (guestInfo: GuestInfo) => {
    let encodedCookieVal = "";

    if (isGuestSignup(guestInfo)) {
      const { email, firstName, lastName } = guestInfo;
      encodedCookieVal = encodeURIComponent(`${email}:${firstName}:${lastName}`);
    } else {
      encodedCookieVal = encodeURIComponent(`${guestInfo.email}`);
    }

    document.cookie = createCookie(encodedCookieVal);
  };
  
  return class extends React.Component<CompProps> {
    constructor(props: CompProps) {
      super(props);
      const { guest, mode } = props;
      if (guest) {
        dropCookie({ ...guest, mode } as GuestSignupInfo | GuestSigninInfo);
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props as CompProps} />
      );
    }
  }
};

export const AuthFrame: React.FunctionComponent<FrameProps> = (props) => {
  const iframeOnload = () => {
    console.log("iframe on load");
    window.parent.postMessage({ type: "success" }, "http://apps.jsfunfoo.com:3000");
  };

  const msgHandler = (evt: any) => {
    console.log("evt::", evt.data);
  };

  useEffect(() => {
    window.addEventListener("message", msgHandler, false);

    return () => window.removeEventListener("message", msgHandler);
  }, []);

  return (
    <div className="auth-frame">
      <iframe
        id="authFrame"
        src="http://apps.jsfunfoo.com:5000"
        title={props.title}
        onLoad={iframeOnload}
        width="100%"
        height="500"
        frameBorder="0"
      />
    </div>
  );
};

export const IdentityAuthFrame = withDropCookie(AuthFrame);

// Integration component
export default () => {
  return (
    <div>
      <IdentityAuthFrame
        guest={{
          email: "john.doe@mailinator.com",
          firstName: "Derek",
          lastName: "Brian"
        }}
        title="Guest sign up"
        mode="guestSignup"
        // onSuccess={() => { }}
      />
    </div>
  )
}
