const { joinTalk, leaveTalk, findTalkPartner } = require("../firestore/talkQueue");
const { createChat } = require("../firestore/chats");

async function handleTalkJoin(uid, prefs) {
  const role = prefs.role || "talker";

  await joinTalk(uid, prefs);

  const partner = await findTalkPartner(uid, role);

  if (!partner) return null;

  await leaveTalk(uid);
  await leaveTalk(partner);

  const chatId = await createChat(uid, partner, "talk");

  return { partner, chatId };
}

module.exports = { handleTalkJoin };
