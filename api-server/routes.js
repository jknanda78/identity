const { login } = require("./post/login");
const { createAccount } = require("./post/createAccount");
const { logout } = require("./post/logout");
const { updatePassword } = require("./post/updatePassword");
const { validateAuth } = require("./middlewares/validate-auth");

exports.routes = (app) => {
  app.post("/account/login", login);
  app.post("/account/createAccount", createAccount);
  app.post("/account/logout", logout);
  app.post("/account/updatePassword", validateAuth, updatePassword);
};
