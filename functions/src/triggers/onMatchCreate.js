const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

exports.onMatchCreate = functions.firestore
  .document("matches/{matchId}")
  .onCreate(async (snap, context) => {
    const match = snap.data();
    const matchId = context.params.matchId;

    const chatRef = db.collection("chats").doc(matchId);

    const chatDoc = await chatRef.get();
    if (chatDoc.exists) return;

    await chatRef.set({
      users: match.users,
      mode: match.mode,
      createdAt: Date.now(),
      lastMessage: null,
    });

    return;
  });
