const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

async function sendToUser(userId, title, body) {
  const tokenDoc = await db.collection("fcmTokens").doc(userId).get();
  if (!tokenDoc.exists) return;

  const token = tokenDoc.data().token;

  await admin.messaging().send({
    token,
    notification: { title, body },
  });
}

exports.onMatchNotification = functions.firestore
  .document("matches/{matchId}")
  .onCreate(async (snap) => {
    const match = snap.data();
    const [u1, u2] = match.users;

    await sendToUser(u1, "It's a Match ❤️", "You have a new match!");
    await sendToUser(u2, "It's a Match ❤️", "You have a new match!");
  });
