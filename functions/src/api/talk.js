const functions = require("firebase-functions");
const { handleTalkJoin } = require("../services/talkService");

exports.joinTalk = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;
  const res = await handleTalkJoin(uid, data || {});
  return res;
});
