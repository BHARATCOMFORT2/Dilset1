import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export const useUserPresence = (uid) => {
  const [presence, setPresence] = useState(null);

  useEffect(() => {
    if (!uid) return;

    const unsub = onSnapshot(doc(db, "users", uid), (snap) => {
      if (snap.exists()) setPresence(snap.data());
    });

    return () => unsub();
  }, [uid]);

  return presence;
};
