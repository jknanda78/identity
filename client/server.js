const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const colors = require("colors");
// SSR with React
// const renderToString = require("react-dom").renderToString;
// SSR HTML template
// const html = require("./ssr-html-template");
// SSR of client side components
// const SignIn = require("../src/containers/sign-in.container");
// const UserProfile = require("../src/containers/user-profile.container");

// defining the Express app
const app = express();
// defining port
const PORT = process.env.PORT || 5000;

/**
 * CRA
 * Using production build
 */
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// adding Helmet to enhance your API"s security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// starting the server
app.listen(PORT, () => {
  console.log(`\n ${colors.green("App Server listening on port 5000")} \n`);
});
