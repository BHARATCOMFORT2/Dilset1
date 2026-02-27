const functions = require("firebase-functions");
const { sendRemarriageInterest, acceptRemarriage } = require("../firestore/remarriage");

exports.sendRemarriageInterest = functions.https.onCall(async (data, context) => {
  const from = context.auth.uid;
  const to = data.to;

  if (!to) throw new functions.https.HttpsError("invalid-argument");

  await sendRemarriageInterest(from, to);
  return { ok: true };
});

exports.acceptRemarriage = functions.https.onCall(async (data, context) => {
  const to = context.auth.uid;
  const from = data.from;

  await acceptRemarriage(from, to);
  return { ok: true };
});
