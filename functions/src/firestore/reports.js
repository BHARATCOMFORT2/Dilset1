const admin = require("firebase-admin");
const db = admin.firestore();

async function createReportDoc({ from, to, reason }) {
  const ref = db.collection("reports").doc();

  await ref.set({
    from,
    to,
    reason,
    status: "pending",
    createdAt: Date.now(),
  });

  return ref.id;
}

async function resolveReportDoc(reportId) {
  await db.collection("reports").doc(reportId).update({
    status: "resolved",
    resolvedAt: Date.now(),
  });
}

module.exports = {
  createReportDoc,
  resolveReportDoc,
};
