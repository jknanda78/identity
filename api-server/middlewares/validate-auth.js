const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../constants").enums;
const { findUserById } = require("../db/models");

exports.validateAuth = (request, response, next) => {
  try {
    const authToken = request.header("Authorization").replace("Bearer ", "");
    const { userId } = jwt.verify(authToken, PRIVATE_KEY);

    findUserById(userId)
      .then(({ authToken, sessionId }) => {
        request.user = {
          userId,
          authToken,
          sessionId,
        };
        next();
      })
      .catch((err) => {
        response
          .status(401)
          .send({ code: "invalid_user", message: "Please authenticate." });
      });
  } catch (err) {
    response
      .status(401)
      .send({ code: "invalid_user", message: "Please authenticate." });
  }
};
