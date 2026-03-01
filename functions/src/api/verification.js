const functions = require("firebase-functions");
const {
  approveVerification,
  rejectVerification,
} = require("../services/verificationService");

exports.approveVerification = functions.https.onCall(
  async (data, context) => {
    const { userId } = data;
    await approveVerification(userId);
    return { success: true };
  }
);

exports.rejectVerification = functions.https.onCall(
  async (data, context) => {
    const { userId } = data;
    await rejectVerification(userId);
    return { success: true };
  }
);
