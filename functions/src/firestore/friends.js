const { db } = require("../config/firebaseAdmin");

const FRIENDS = db.collection("friends");
const REQUESTS = db.collection("friendRequests");

// send request
async function sendRequest(from, to) {
  const id = `${from}_${to}`;
  await REQUESTS.doc(id).set({
    from,
    to,
    status: "pending",
    createdAt: new Date()
  });
}

// accept request
async function acceptRequest(from, to) {
  const id = [from, to].sort().join("_");

  await FRIENDS.doc(id).set({
    users: [from, to],
    createdAt: new Date()
  });

  await REQUESTS.doc(`${from}_${to}`).delete();
}

module.exports = { sendRequest, acceptRequest };
