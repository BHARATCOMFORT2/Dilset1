const functions = require("firebase-functions");
const { addMessage } = require("../firestore/chats");

exports.sendMessage = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;
  const { chatId, text } = data;

  if (!chatId || !text) {
    throw new functions.https.HttpsError("invalid-argument");
  }

  await addMessage(chatId, uid, text);
  return { ok: true };
});
