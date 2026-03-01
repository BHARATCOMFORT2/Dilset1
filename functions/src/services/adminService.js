const admin = require("firebase-admin");
const db = admin.firestore();

async function getStats() {
  const users = await db.collection("profiles").get();
  const matches = await db.collection("matches").get();
  const reports = await db.collection("reports").get();
  const premium = await db.collection("premium").get();

  return {
    users: users.size,
    matches: matches.size,
    reports: reports.size,
    premium: premium.size,
  };
}

async function blockUser(userId) {
  await db.collection("profiles").doc(userId).update({
    blocked: true,
  });
}

module.exports = {
  getStats,
  blockUser,
};
