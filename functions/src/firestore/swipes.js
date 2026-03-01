const admin = require("firebase-admin");
const db = admin.firestore();

async function createSwipe(from, to, mode, action) {
  const id = `${from}_${to}`;

  await db.collection("swipes").doc(id).set({
    from,
    to,
    mode,
    action,
    createdAt: Date.now(),
  });

  return id;
}

async function getReverseSwipe(from, to) {
  const snap = await db
    .collection("swipes")
    .doc(`${to}_${from}`)
    .get();

  return snap.exists ? snap.data() : null;
}

async function createMatch(userA, userB, mode) {
  const id = `${userA}_${userB}`;

  await db.collection("matches").doc(id).set({
    users: [userA, userB],
    mode,
    createdAt: Date.now(),
  });

  return id;
}

module.exports = {
  createSwipe,
  getReverseSwipe,
  createMatch,
};
