const functions = require("firebase-functions");
const { handleSwipe } = require("../services/swipeService");

exports.swipe = functions.https.onCall(async (data, context) => {
  const { from, to, mode, action } = data;

  if (!from || !to || !mode || !action) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing swipe data"
    );
  }

  return await handleSwipe({ from, to, mode, action });
});
