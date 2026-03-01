const {
  createReportDoc,
  resolveReportDoc,
} = require("../firestore/reports");

async function createReport(data) {
  return createReportDoc(data);
}

async function resolveReport(reportId) {
  return resolveReportDoc(reportId);
}

module.exports = {
  createReport,
  resolveReport,
};
