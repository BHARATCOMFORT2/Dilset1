const razorpay = require("./razorpayClient");

async function createRazorpayOrder({ amount, currency = "INR", receipt }) {
  const order = await razorpay.orders.create({
    amount: amount * 100, // ₹ → paise
    currency,
    receipt,
  });

  return order;
}

module.exports = { createRazorpayOrder };
