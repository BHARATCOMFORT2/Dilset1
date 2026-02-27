const { db } = require("../config/firebaseAdmin");

const NOTIFICATIONS = db.collection("notifications");

async function createNotification(to, type, from, meta = {}) {
  const id = NOTIFICATIONS.doc().id;

  await NOTIFICATIONS.doc(id).set({
    to,
    from,
    type, // like | match | friend | marriage
    meta,
    read: false,
    createdAt: new Date()
  });
}

module.exports = { createNotification };
