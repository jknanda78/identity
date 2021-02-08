import React from "react";
import { renderToString } from "react-dom/server";
import SignIn from "../../client/src/pages/containers/sign-in.container";
import UserProfile from "../../client/src/pages/containers/user-profile.container";
import html from "../../client/templates/ssr.template";
import express, {Request, Response} from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import colors from "colors";

// defining the Express app
const app = express();

// defining port
const PORT = process.env.PORT || 5000;

// adding Helmet to enhance your API"s security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// using cookieParser to read cookies from request object
app.use(cookieParser());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// ssr & routing logic
app.get("identity-app/", (req: Request, res: Response) => {

  // Validate auth cookies
  // validateCookies(req);
  const cookies = req.cookies;
  
  let body;

  if (cookies.uid && cookies.sessionId && cookies.authToken) {
    body = renderToString(React.createElement(UserProfile, {ssr: true}, null));
  } else {
    body = renderToString(React.createElement(SignIn, {ssr: true}, null));
  }

  res.send(html({ body }));
});

// starting the server
app.listen(PORT, () => {
  console.log(`\n ${colors.green("App Server listening on port 5000")} \n`);
});
