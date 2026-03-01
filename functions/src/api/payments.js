const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

const { createRazorpayOrder } = require("../payments/createOrder");
const { verifyRazorpaySignature } = require("../payments/verifyPayment");
const { saveSubscription } = require("../firestore/subscriptions");

exports.createOrder = functions.https.onCall(async (data, context) => {
  const userId = context.auth.uid;
  const { plan, amount } = data;

  const order = await createRazorpayOrder({
    amount,
    receipt: `sub_${userId}_${Date.now()}`,
  });

  await saveSubscription(userId, {
    plan,
    orderId: order.id,
    status: "created",
  });

  return order;
});

exports.verifyPayment = functions.https.onCall(async (data, context) => {
  const userId = context.auth.uid;
  const { order_id, payment_id, signature, plan } = data;

  const valid = verifyRazorpaySignature({
    order_id,
    payment_id,
    signature,
  });

  if (!valid) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "Invalid payment"
    );
  }

  await saveSubscription(userId, {
    plan,
    paymentId: payment_id,
    status: "active",
    startedAt: Date.now(),
  });

  return { success: true };
});
