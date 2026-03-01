import { useEffect, useState } from "react";
import { db, functions } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "./useAuth";
import { httpsCallable } from "firebase/functions";

const markReadFn = httpsCallable(functions, "markNotificationRead");

export const useNotifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "notifications"),
      where("to", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      setNotifications(arr);
    });

    return () => unsub();
  }, [user]);

  const markRead = async (id) => {
    await markReadFn({ id });
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return { notifications, unreadCount, markRead };
};
