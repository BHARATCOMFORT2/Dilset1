const admin = require("firebase-admin");
const db = admin.firestore();

async function getVerification(userId) {
  const snap = await db.collection("verification").doc(userId).get();
  return snap.exists ? snap.data() : null;
}

async function updateVerificationStatus(userId, status) {
  await db.collection("verification").doc(userId).update({
    status,
    reviewedAt: Date.now(),
  });
}

module.exports = {
  getVerification,
  updateVerificationStatus,
};
