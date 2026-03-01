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

exports.onMessageNotification = functions.firestore
  .document("chats/{chatId}/messages/{msgId}")
  .onCreate(async (snap, context) => {
    const msg = snap.data();
    const chatId = context.params.chatId;

    const chat = await db.collection("chats").doc(chatId).get();
    if (!chat.exists) return;

    const users = chat.data().users;
    const receiver = users.find((u) => u !== msg.from);

    if (!receiver) return;

    await sendToUser(
      receiver,
      "New Message 💬",
      msg.text || "You have a new message"
    );
  });
