import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export default function useVerification(userId) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const ref = doc(db, "verification", userId);

    return onSnapshot(ref, (snap) => {
      setStatus(snap.exists() ? snap.data().status : null);
    });
  }, [userId]);

  async function submit(selfieUrl, idUrl) {
    await setDoc(doc(db, "verification", userId), {
      userId,
      selfieUrl,
      idUrl,
      status: "pending",
      createdAt: Date.now(),
    });
  }

  return { status, submit };
}
