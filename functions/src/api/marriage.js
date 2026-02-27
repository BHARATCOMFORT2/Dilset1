const functions = require("firebase-functions");
const { sendInterest, acceptInterest } = require("../firestore/marriage");
const { notifyMarriage } = require("../services/notificationService");

await sendInterest(from, to);
await notifyMarriage(from, to);
exports.sendMarriageInterest = functions.https.onCall(async (data, context) => {
  const from = context.auth.uid;
  const to = data.to;

  if (!to) throw new functions.https.HttpsError("invalid-argument");

  await sendInterest(from, to);
  return { ok: true };
});

exports.acceptMarriage = functions.https.onCall(async (data, context) => {
  const to = context.auth.uid;
  const from = data.from;

  await acceptInterest(from, to);
  return { ok: true };
});
