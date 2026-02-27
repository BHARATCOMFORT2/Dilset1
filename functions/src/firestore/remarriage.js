const { db } = require("../config/firebaseAdmin");

const INTERESTS = db.collection("remarriageInterests");
const MATCHES = db.collection("matches");

// send interest
async function sendRemarriageInterest(from, to) {
  const id = `${from}_${to}`;
  await INTERESTS.doc(id).set({
    from,
    to,
    status: "pending",
    createdAt: new Date()
  });
}

// accept → create remarriage match
async function acceptRemarriage(from, to) {
  const matchId = [from, to].sort().join("_");

  await MATCHES.doc(matchId).set({
    users: [from, to],
    mode: "remarriage",
    createdAt: new Date(),
    active: true
  });

  await INTERESTS.doc(`${from}_${to}`).delete();
}

module.exports = { sendRemarriageInterest, acceptRemarriage };
