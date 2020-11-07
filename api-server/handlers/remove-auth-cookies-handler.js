exports.removeAuthCookiesHandler = (request, response) => {
  response.clearCookie("sessionid");
  response.clearCookie("authToken");
  response.clearCookie("uid");
};
