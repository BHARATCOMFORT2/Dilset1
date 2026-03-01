const {
  getVerification,
  updateVerificationStatus,
} = require("../firestore/verification");

async function approveVerification(userId) {
  const v = await getVerification(userId);
  if (!v) throw new Error("Verification not found");

  await updateVerificationStatus(userId, "verified");
}

async function rejectVerification(userId) {
  const v = await getVerification(userId);
  if (!v) throw new Error("Verification not found");

  await updateVerificationStatus(userId, "rejected");
}

module.exports = {
  approveVerification,
  rejectVerification,
};
