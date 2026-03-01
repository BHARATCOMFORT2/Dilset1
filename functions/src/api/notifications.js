const functions = require("firebase-functions");
const { db } = require("../config/firebaseAdmin");

exports.markNotificationRead = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;
  const id = data.id;

  const ref = db.collection("notifications").doc(id);
  const snap = await ref.get();

  if (!snap.exists) return;

  if (snap.data().to !== uid) return;

  await ref.update({ read: true });

  return { ok: true };
});
