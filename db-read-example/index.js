const clientPromise = require("./mongo-client");
exports.handler = readAll;

async function readAll(event, context, callback) {
  console.log("EVENT: \n" + JSON.stringify(event));
  try {
    const client = await clientPromise;
    const posts = client.db().collection("posts");

    const allPosts = await posts.find({}, { limit: 10 }).toArray();
    return allPosts;
  } catch (error) {
    callback(error);
  }
}
