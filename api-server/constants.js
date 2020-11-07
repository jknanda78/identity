exports.enums = {
  PRIVATE_KEY: "SECRET_SIGNATURE",
};

exports.errors = {
  account_exists: {
    alert: "error",
    code: "account_exists",
    http_status: 403,
    message:
      "The email address already exists. Please sign-in or use another email address.",
  },
  user_no_match: {
    alert: "error",
    code: "user_no_match",
    http_status: 403,
    message: "Email address or password doesn't match. Please try again.",
  },
  internal_server: {
    alert: "error",
    code: "internal_server_error",
    http_status: 500,
    message: "Something went wrong. Please try again later.",
  },
};
