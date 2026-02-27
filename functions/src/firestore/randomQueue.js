const { db } = require("../config/firebaseAdmin");

const QUEUE = db.collection("randomQueue");

async function joinQueue(uid, data) {
  await QUEUE.doc(uid).set({
    uid,
    gender: data.gender || null,
    preferredGender: data.preferredGender || null,
    interests: data.interests || [],
    online: true,
    joinedAt: new Date()
  });
}

async function leaveQueue(uid) {
  await QUEUE.doc(uid).delete();
}

async function findMatch(uid) {
  const snap = await QUEUE.where("online", "==", true).get();

  let partner = null;

  snap.forEach((doc) => {
    if (doc.id !== uid && !partner) {
      partner = doc.id;
    }
  });

  return partner;
}

module.exports = { joinQueue, leaveQueue, findMatch };
