import React from "react";

const HelloWorld = ({
  email,
  firstName,
  lastName
}) => {
  /*JSX events doesn't work with SSR
    useEffect(() => {
    const iframeElement = document.getElementById("authFrame");
    iframeElement.contentWindow.postMessage("hello from server", "http://apps.jsfunfoo.com");
  },[]);*/

  return <h2>Hello world from server !! {email} {firstName} {lastName}</h2>
};

export default HelloWorld;
