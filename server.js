// NODE_ENV=development npx babel-node --presets @babel/preset-env,@babel/preset-react -- ./server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
// SSR with React
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
// SSR HTML template
const htmlTemplate = require("./src/templates/ssr.simple.template").default;
// SSR of client side components
const HelloWorld = require("./src/pages/ssr/hello-world").default;
// defining the Express app
const app = express();
// defining port
const PORT = process.env.PORT || 5000;

// adding Helmet to enhance your API"s security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());

// using cookieParser to read cookies from request object
app.use(cookieParser());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// using cors to handle cross domain requests
app.use(cors());

app.all("*", (req, res, next) => {
  //cors
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With, X-Custom-Header");
  res.header("Access-Control-Allow-Credentials", true);

  // iframe | x-frame-options is not needed if `frame-ancestors` sent
  res.header("Content-Security-Policy", "frame-ancestors http://*.jsfunfoo.com:*");
  next();
});

app.get("/", (req, res) => {
  const guest_cu_cookie = req.cookies?.guest_cu;
  const guest_info = guest_cu_cookie?.split(":") || [];
  const [email, firstName, lastName] = guest_info;
  const markup = renderToString(<HelloWorld email={email} firstName={firstName} lastName={lastName} />);
  res.send(htmlTemplate({ body: markup }));
});

// starting the server
app.listen(PORT, () => {
  console.log(`\n ${colors.green("App Server listening on port 5000")} \n`);
});
