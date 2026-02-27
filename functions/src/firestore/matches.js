const { db } = require("../config/firebaseAdmin");

const MATCHES = db.collection("matches");

// create match
async function createMatch(user1, user2, mode = "dating") {
  const id = [user1, user2].sort().join("_");

  await MATCHES.doc(id).set({
    users: [user1, user2],
    mode,
    createdAt: new Date(),
    active: true
  });

  return id;
}

// check match
async function getMatch(user1, user2) {
  const id = [user1, user2].sort().join("_");
  const doc = await MATCHES.doc(id).get();
  return doc.exists ? doc.data() : null;
}

module.exports = { createMatch, getMatch };
