const clientPromise = require("./mongo-client");
exports.handler = readAll;

async function readAll(event, context, callback) {
  console.log("EVENT: \n" + JSON.stringify(event));
  try {
    const client = await clientPromise;
    const posts = client.db().collection("posts");

    const newPost = event.post;

    const result = await posts.insertOne(newPost);
    return { updated: true };
  } catch (error) {
    callback(error);
  }
}
