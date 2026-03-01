const admin = require("firebase-admin");
const db = admin.firestore();

async function saveFcmToken(userId, token) {
  await db.collection("fcmTokens").doc(userId).set({
    token,
    updatedAt: Date.now(),
  });
}

async function getFcmToken(userId) {
  const snap = await db.collection("fcmTokens").doc(userId).get();
  return snap.exists ? snap.data().token : null;
}

module.exports = {
  saveFcmToken,
  getFcmToken,
};
