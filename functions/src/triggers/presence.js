const functions = require("firebase-functions");
const { db } = require("../config/firebaseAdmin");

exports.onUserStatusChange = functions.firestore
  .document("users/{uid}")
  .onUpdate(async (change, context) => {
    const after = change.after.data();

    if (after.online === false) {
      await db
        .collection("users")
        .doc(context.params.uid)
        .update({
          lastActive: new Date()
        });
    }
  });
