const { login } = require("./post/login");
const { createAccount } = require("./post/createAccount");
const { logout } = require("./post/logout");
const { validateAuth } = require("./middlewares/validate-auth");

exports.routes = (app) => {
  app.post("/account/login", login);
  app.post("/account/createAccount", createAccount);
  app.post("/account/logout", validateAuth, logout);
};
