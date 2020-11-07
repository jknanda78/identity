const defaultOpts = {
  maxAge: 60 * 1000 * 60 * 24,
  secure: false,
};

exports.sessionHandler = (request, response) => {
  // Drop authToken Cookie
  response.cookie("authToken", request.user.authToken, defaultOpts);

  // Drop Session Cookie
  response.cookie("sessionid", request.user.sessionId, defaultOpts);

  // Drop UID Cookie
  response.cookie("uid", request.user.userId, defaultOpts);
};
