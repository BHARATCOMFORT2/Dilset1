const {
  createReportDoc,
  resolveReportDoc,
} = require("../firestore/reports");

async function createReport({ from, to, reason }) {
  if (!from || !to || !reason) {
    throw new Error("Invalid report data");
  }

  return await createReportDoc({
    from,
    to,
    reason,
  });
}

async function resolveReport(reportId) {
  if (!reportId) {
    throw new Error("Report ID required");
  }

  return await resolveReportDoc(reportId);
}

module.exports = {
  createReport,
  resolveReport,
};
