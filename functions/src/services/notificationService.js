const { createNotification } = require("../firestore/notifications");
const admin = require("firebase-admin");

const db = admin.firestore();

/* =========================
   FCM helpers
========================= */

async function getUserToken(userId) {
  const snap = await db.collection("fcmTokens").doc(userId).get();
  return snap.exists ? snap.data().token : null;
}

async function sendPush(userId, title, body, data = {}) {
  const token = await getUserToken(userId);
  if (!token) return;

  await admin.messaging().send({
    token,
    notification: { title, body },
    data,
  });
}

/* =========================
   Notification creators
========================= */

async function notifyLike(from, to) {
  // in-app
  await createNotification(to, "like", from);

  // push
  await sendPush(to, "Someone liked you ❤️", "Open Dilset to see who");
}

async function notifyMatch(u1, u2) {
  // in-app
  await createNotification(u1, "match", u2);
  await createNotification(u2, "match", u1);

  // push
  await sendPush(u1, "It's a Match ❤️", "You matched with someone!");
  await sendPush(u2, "It's a Match ❤️", "You matched with someone!");
}

async function notifyFriend(from, to) {
  await createNotification(to, "friend", from);
  await sendPush(to, "New Friend Request 🤝", "Someone wants to connect");
}

async function notifyMarriage(from, to) {
  await createNotification(to, "marriage", from);
  await sendPush(
    to,
    "Marriage Interest 💍",
    "Someone is interested in marriage"
  );
}

async function notifyMessage(from, to, text) {
  await createNotification(to, "message", from);
  await sendPush(to, "New Message 💬", text || "You received a message");
}

module.exports = {
  notifyLike,
  notifyMatch,
  notifyFriend,
  notifyMarriage,
  notifyMessage,
};
