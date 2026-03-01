import { getMessaging, getToken } from "firebase/messaging";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export async function registerFcmToken(userId) {
  try {
    const messaging = getMessaging();

    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_FCM_VAPID_KEY,
    });

    if (!token) return;

    await setDoc(doc(db, "fcmTokens", userId), {
      token,
      updatedAt: Date.now(),
    });

    return token;
  } catch (e) {
    console.error("FCM error", e);
  }
}
