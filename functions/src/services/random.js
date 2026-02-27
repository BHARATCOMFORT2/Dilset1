const functions = require("firebase-functions");
const { handleJoin } = require("../services/queueService");

exports.joinRandom = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;

  const res = await handleJoin(uid, data || {});
  return res;
});
