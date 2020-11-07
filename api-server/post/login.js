const { sessionHandler } = require("../handlers/session.handler");
const { retrieveUser } = require("../handlers/retrieve-user.handler");
const { createAuthToken } = require("../db/models");

exports.login = (request, response) => {
  const { email } = request.body;
  return retrieveUser(request)
    .then((profile) => {
      const { userId, firstName, lastName, phoneNumber } = profile;
      return createAuthToken(userId).then(({ authToken, sessionId }) => {
        request.user = {
          userId,
          authToken,
          sessionId,
        };
        return { firstName, lastName, phoneNumber };
      });
    })
    .then((profile) => {
      sessionHandler(request, response);
      response
        .status(200)
        .send({ email, ...profile, challenge: "/account/user/profile" });
    })
    .catch((err) => response.status(403).send(err));
};
