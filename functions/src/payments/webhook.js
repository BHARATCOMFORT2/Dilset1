const admin = require("firebase-admin");
const db = admin.firestore();

async function handleWebhook(event) {
  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;
    const userId = payment.notes.userId;

    await db.collection("premium").doc(userId).set({
      active: true,
      paymentId: payment.id,
      amount: payment.amount / 100,
      startedAt: Date.now(),
    });
  }
}

module.exports = { handleWebhook };
