const { registerUser } = require("../handlers/register-user.handler");
const { sessionHandler } = require("../handlers/session.handler");

exports.createAccount = (request, response) =>
  registerUser(request)
    .then((profile) => {
      sessionHandler(request, response);
      response
        .status(201)
        .send({ email: request.body.email, ...profile, challenge: "/user/profile" });
    })
    .catch((err) => response.status(403).send(err));
