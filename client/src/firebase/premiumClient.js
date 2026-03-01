import { db } from "./config";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function getSubscription(userId) {
  const ref = doc(db, "premium", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function setSubscription(userId, data) {
  const ref = doc(db, "premium", userId);
  await setDoc(ref, {
    userId,
    ...data,
    updatedAt: Date.now(),
  });
}
