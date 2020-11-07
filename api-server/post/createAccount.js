const { registerUser } = require("../handlers/register-user.handler");
const { sessionHandler } = require("../handlers/session.handler");

exports.createAccount = (request, response) =>
  registerUser(request)
    .then(() => {
      sessionHandler(request);
      response.send();
    })
    .catch((err) => response.status(403).send(err));
