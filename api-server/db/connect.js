const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://dev.jsfunfoo.com:27017";

// Connect to mongodb
exports.connectDB = () =>
  MongoClient.connect(connectionURL, {}).then((client) => client);
