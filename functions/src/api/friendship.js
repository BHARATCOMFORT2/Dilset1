const functions = require("firebase-functions");
const { sendRequest, acceptRequest } = require("../firestore/friends");
const { notifyFriend } = require("../services/notificationService");

await sendRequest(from, to);
await notifyFriend(from, to);
exports.addFriend = functions.https.onCall(async (data, context) => {
  const from = context.auth.uid;
  const to = data.to;

  if (!to) throw new functions.https.HttpsError("invalid-argument");

  await sendRequest(from, to);
  return { ok: true };
});

exports.acceptFriend = functions.https.onCall(async (data, context) => {
  const to = context.auth.uid;
  const from = data.from;

  await acceptRequest(from, to);
  return { ok: true };
});
