const { joinQueue, leaveQueue, findMatch } = require("../firestore/randomQueue");
const { createChat } = require("../firestore/chats");

async function handleJoin(uid, prefs) {
  await joinQueue(uid, prefs);

  const partner = await findMatch(uid);

  if (!partner) return null;

  await leaveQueue(uid);
  await leaveQueue(partner);

  const chatId = await createChat(uid, partner, "random");

  return { partner, chatId };
}

module.exports = { handleJoin };
