// Import the dependency.
const { MongoClient } = require("mongodb");
// Export a module-scoped MongoClient promise. By doing this in a separate
// module, the client can be shared across functions.
const uri =
  "mongodb+srv://example-user:<password>@clusterdev.o0rfb.mongodb.net/sample_training?retryWrites=true&w=majority";
const mongoUri = uri.replace("<password>", process.env.MONGODB_PASSWORD);
const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = client.connect();
