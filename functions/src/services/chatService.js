const admin = require("firebase-admin");
const db = admin.firestore();

async function createChatIfMissing(matchId, users, mode) {
  const ref = db.collection("chats").doc(matchId);
  const snap = await ref.get();

  if (snap.exists) return;

  await ref.set({
    users,
    mode,
    createdAt: Date.now(),
    lastMessage: null,
  });
}

async function updateLastMessage(chatId, message) {
  await db.collection("chats").doc(chatId).update({
    lastMessage: message.text || "",
    lastMessageAt: Date.now(),
  });
}

module.exports = {
  createChatIfMissing,
  updateLastMessage,
};
