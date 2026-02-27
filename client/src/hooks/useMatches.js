import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "./useAuth";

export const useMatches = () => {
  const { user } = useAuth();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "matches"),
      where("users", "array-contains", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      setMatches(arr);
    });

    return () => unsub();
  }, [user]);

  return { matches };
};
