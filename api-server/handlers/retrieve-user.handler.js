const { findUserByEmail, getUserProfileById } = require("../db/models");
const { validatePwd } = require("../handlers/validate-pwd");
const { user_no_match } = require("../constants").errors;

exports.retrieveUser = (request) => {
  const { email, password } = request.body;

  return findUserByEmail(email).then((profile) => {
    if (!profile) {
      return Promise.reject(user_no_match);
    }

    return validatePwd(profile, password)
      ? getUserProfileById(profile.id)
      : Promise.reject(user_no_match);
  });
};
