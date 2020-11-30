const jwt = require("jsonwebtoken");
const { v4: uuid4 } = require("uuid");
const { PRIVATE_KEY } = require("../../constants").enums;
const { connectDB } = require("../connect");

// Find user by userId in user_session collection
exports.findUserById = (userId) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const user_session = db.collection("user_session");

    return user_session.findOne({ userId }).then((user) => user);
  });

// Delete user from user_session collection
exports.deleteUserSessionById = (userId) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const user_session = db.collection("user_session");

    return user_session.deleteOne({ userId });
  });

// Find if the email exists in user_identity collection
exports.findUserByEmail = (email) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const user_identity = db.collection("user_identity");

    return user_identity.findOne({ email }).then((profile) => profile);
  });

// Get the profile from user_profile collection
exports.getUserProfileById = (id) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const user_profile = db.collection("user_profile");

    return user_profile
      .findOne({ id })
      .then(({ userId, firstName, lastName, phoneNumber }) => ({
        userId,
        firstName,
        lastName,
        phoneNumber,
      }));
  });

// Create authToken in user_session collection
exports.createAuthToken = (userId) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const userSession = db.collection("user_session");
    const timestamp = Date.now();
    const authToken = jwt.sign({ userId }, PRIVATE_KEY);
    const sessionId = `${userId}.${timestamp}`;

    return userSession
      .insertOne({
        userId,
        authToken,
        sessionId,
        timestamp,
      })
      .then(() => ({
        authToken,
        sessionId,
      }));
  });

// Insert new user in the database
exports.createNewUser = (request) =>
  connectDB().then((client) => {
    const db = client.db("userdb");
    const userIdentity = db.collection("user_identity");
    const userProfile = db.collection("user_profile");
    const { email, firstName, lastName, pwd } = request.body;
    const userId = uuid4();

    return Promise.all([
      (userIdentity.insertOne({
        userId,
        email,
        pwd,
        fingerPrint: "",
        timestamp: Date.now(),
      }),
      userProfile.insertOne({ userId, firstName, lastName, phoneNumber: "" })),
    ])
      .then(() => exports.createAuthToken(userId))
      .then(({ authToken, sessionId }) => {
        request.user = {
          userId,
          authToken,
          sessionId,
        };
      });
  });
