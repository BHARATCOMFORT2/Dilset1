import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export default function useSubscription(userId) {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const ref = doc(db, "premium", userId);

    const unsub = onSnapshot(ref, (snap) => {
      setSubscription(snap.exists() ? snap.data() : null);
      setLoading(false);
    });

    return unsub;
  }, [userId]);

  return { subscription, loading };
}
