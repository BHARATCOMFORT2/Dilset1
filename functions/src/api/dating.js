const functions = require("firebase-functions");
const { db } = require("../config/firebaseAdmin");
const { createMatch } = require("../firestore/matches");

exports.likeUser = functions.https.onCall(async (data, context) => {
  const from = context.auth.uid;
  const to = data.to;

  if (!to) throw new functions.https.HttpsError("invalid-argument");

  const likeRef = db.collection("likes").doc(`${from}_${to}`);
  await likeRef.set({ from, to, createdAt: new Date() });

  // check reverse like
  const reverse = await db.collection("likes").doc(`${to}_${from}`).get();

  if (reverse.exists) {
    const matchId = await createMatch(from, to, "dating");
    return { match: true, matchId };
  }

  return { match: false };
});
