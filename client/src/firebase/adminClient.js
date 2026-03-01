import { httpsCallable } from "firebase/functions";
import { functions } from "./config";

export async function getAdminStats() {
  const fn = httpsCallable(functions, "getAdminStats");
  const res = await fn();
  return res.data;
}

export async function blockUser(userId) {
  const fn = httpsCallable(functions, "blockUser");
  await fn({ userId });
}

export async function approveVerification(userId) {
  const fn = httpsCallable(functions, "approveVerification");
  await fn({ userId });
}

export async function rejectVerification(userId) {
  const fn = httpsCallable(functions, "rejectVerification");
  await fn({ userId });
}
