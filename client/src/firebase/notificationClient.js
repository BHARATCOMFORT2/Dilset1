import { db } from "./config";
import { doc, setDoc } from "firebase/firestore";

export async function saveFcmToken(userId, token) {
  await setDoc(doc(db, "fcmTokens", userId), {
    token,
    updatedAt: Date.now(),
  });
}

export function showNotification(title, body) {
  if (Notification.permission !== "granted") return;

  new Notification(title, { body });
}
