const functions = require("firebase-functions");
const { getStats, blockUser } = require("../services/adminService");

exports.getAdminStats = functions.https.onCall(async () => {
  return await getStats();
});

exports.blockUser = functions.https.onCall(async (data) => {
  const { userId } = data;
  await blockUser(userId);
  return { success: true };
});
