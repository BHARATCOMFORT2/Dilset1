import { useEffect } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "./useAuth";

export const usePresence = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const ref = doc(db, "users", user.uid);

    const setOnline = () => {
      updateDoc(ref, { online: true });
    };

    const setOffline = () => {
      updateDoc(ref, { online: false });
    };

    setOnline();

    window.addEventListener("beforeunload", setOffline);

    return () => {
      setOffline();
      window.removeEventListener("beforeunload", setOffline);
    };
  }, [user]);
};
