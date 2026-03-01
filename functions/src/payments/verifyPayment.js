const crypto = require("crypto");
const functions = require("firebase-functions");

function verifyRazorpaySignature({
  order_id,
  payment_id,
  signature,
}) {
  const body = `${order_id}|${payment_id}`;

  const expected = crypto
    .createHmac(
      "sha256",
      functions.config().razorpay.key_secret
    )
    .update(body)
    .digest("hex");

  return expected === signature;
}

module.exports = { verifyRazorpaySignature };
