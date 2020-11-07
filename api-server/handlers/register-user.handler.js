const { account_exists } = require("../constants").errors;
const { createNewUser, findUserByEmail } = require("../db/models");

exports.registerUser = (request) => {
  const email = request.body.email;

  return findUserByEmail(email).then((profile) =>
    profile ? Promise.reject(account_exists) : createNewUser(request)
  );
};
