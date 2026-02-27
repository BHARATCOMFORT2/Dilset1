const { db } = require("../config/firebaseAdmin");

const QUEUE = db.collection("talkQueue");

async function joinTalk(uid, data) {
  await QUEUE.doc(uid).set({
    uid,
    role: data.role || "talker", // talker | listener
    topics: data.topics || [],
    genderPref: data.genderPref || null,
    online: true,
    joinedAt: new Date()
  });
}

async function leaveTalk(uid) {
  await QUEUE.doc(uid).delete();
}

async function findTalkPartner(uid, role) {
  const targetRole = role === "talker" ? "listener" : "talker";

  const snap = await QUEUE.where("role", "==", targetRole)
    .where("online", "==", true)
    .get();

  let partner = null;

  snap.forEach((doc) => {
    if (doc.id !== uid && !partner) {
      partner = doc.id;
    }
  });

  return partner;
}

module.exports = { joinTalk, leaveTalk, findTalkPartner };
