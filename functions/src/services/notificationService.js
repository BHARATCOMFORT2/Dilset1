const { createNotification } = require("../firestore/notifications");

async function notifyLike(from, to) {
  await createNotification(to, "like", from);
}

async function notifyMatch(u1, u2) {
  await createNotification(u1, "match", u2);
  await createNotification(u2, "match", u1);
}

async function notifyFriend(from, to) {
  await createNotification(to, "friend", from);
}

async function notifyMarriage(from, to) {
  await createNotification(to, "marriage", from);
}

module.exports = {
  notifyLike,
  notifyMatch,
  notifyFriend,
  notifyMarriage
};
