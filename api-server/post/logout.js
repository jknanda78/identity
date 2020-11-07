const { deleteUserSessionById } = require("../db/models");
const {
  removeAuthCookiesHandler,
} = require("../handlers/remove-auth-cookies-handler");

exports.logout = (request, response) => {
  deleteUserSessionById(request.user.userId).then(() => {
    removeAuthCookiesHandler(request, response);
    response.status(200).send();
  });
};
