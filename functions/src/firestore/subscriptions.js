const admin = require("firebase-admin");
const db = admin.firestore();

async function saveSubscription(userId, data) {
  await db.collection("premium").doc(userId).set(
    {
      userId,
      ...data,
      updatedAt: Date.now(),
    },
    { merge: true }
  );
}

module.exports = { saveSubscription };
