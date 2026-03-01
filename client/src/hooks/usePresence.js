import { useEffect } from "react";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "./useAuth";

export const usePresence = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    const ref = doc(db, "presence", user.uid);

    const setOnline = () =>
      setDoc(ref, { online: true, updatedAt: Date.now() });

    const setOffline = () =>
      setDoc(ref, { online: false, updatedAt: Date.now() });

    setOnline();

    window.addEventListener("beforeunload", setOffline);

    return () => {
      setOffline();
      window.removeEventListener("beforeunload", setOffline);
    };
  }, [user]);
};
