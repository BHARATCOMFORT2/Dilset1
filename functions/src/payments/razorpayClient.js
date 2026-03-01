const Razorpay = require("razorpay");
const functions = require("firebase-functions");

const razorpay = new Razorpay({
  key_id: functions.config().razorpay.key_id,
  key_secret: functions.config().razorpay.key_secret,
});

module.exports = razorpay;
