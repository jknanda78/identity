const { deleteUserSessionById } = require("../db/models");
const {
  removeAuthCookiesHandler,
} = require("../handlers/remove-auth-cookies-handler");

exports.logout = (request, response) => {
  const userId = request.cookies.uid;

  deleteUserSessionById(userId).then(() => {
    removeAuthCookiesHandler(request, response);
    response.status(200).send({challenge: "/"});
  });
};
