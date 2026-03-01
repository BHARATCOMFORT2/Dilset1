const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

exports.onPresenceUpdate = functions.firestore
  .document("presence/{userId}")
  .onWrite(async (change, context) => {
    const userId = context.params.userId;

    const data = change.after.exists ? change.after.data() : null;

    const online = data ? data.online === true : false;

    await db.collection("profiles").doc(userId).update({
      online,
      lastSeen: Date.now(),
    });
  });
