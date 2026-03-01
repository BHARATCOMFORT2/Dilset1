import { useEffect } from "react";
import { registerFcmToken } from "../firebase/fcmClient";

export default function useFcmToken(user) {
  useEffect(() => {
    if (!user?.uid) return;
    registerFcmToken(user.uid);
  }, [user]);
}
