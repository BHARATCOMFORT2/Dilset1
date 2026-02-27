const { db } = require("../config/firebaseAdmin");

const INTERESTS = db.collection("marriageInterests");
const MATCHES = db.collection("matches");

// send interest
async function sendInterest(from, to) {
  const id = `${from}_${to}`;
  await INTERESTS.doc(id).set({
    from,
    to,
    status: "pending",
    createdAt: new Date()
  });
}

// accept interest → create matrimony match
async function acceptInterest(from, to) {
  const matchId = [from, to].sort().join("_");

  await MATCHES.doc(matchId).set({
    users: [from, to],
    mode: "marriage",
    createdAt: new Date(),
    active: true
  });

  await INTERESTS.doc(`${from}_${to}`).delete();
}

module.exports = { sendInterest, acceptInterest };
