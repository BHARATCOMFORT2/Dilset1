const functions = require("firebase-functions");
const { createReport, resolveReport } = require("../services/reportService");

exports.createReport = functions.https.onCall(async (data, context) => {
  const from = context.auth.uid;
  const { to, reason } = data;

  await createReport({ from, to, reason });

  return { success: true };
});

exports.resolveReport = functions.https.onCall(async (data, context) => {
  const { reportId } = data;

  await resolveReport(reportId);

  return { success: true };
});
