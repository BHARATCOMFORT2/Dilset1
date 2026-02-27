const { db } = require("../config/firebaseAdmin");

const CHATS = db.collection("chats");

async function createChat(user1, user2, mode = "dating") {
  const id = [user1, user2].sort().join("_");

  await CHATS.doc(id).set({
    participants: [user1, user2],
    mode,
    createdAt: new Date(),
    lastMessage: "",
    lastMessageAt: null
  });

  return id;
}

async function addMessage(chatId, sender, text) {
  const msgRef = CHATS.doc(chatId).collection("messages").doc();

  await msgRef.set({
    senderId: sender,
    text,
    createdAt: new Date()
  });

  await CHATS.doc(chatId).update({
    lastMessage: text,
    lastMessageAt: new Date()
  });
}

module.exports = { createChat, addMessage };
