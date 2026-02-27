import { useEffect, useState } from "react";
import { db, functions } from "../firebase/config";
import { httpsCallable } from "firebase/functions";
import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

const sendMessageFn = httpsCallable(functions, "sendMessage");

export const useChat = (chatId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!chatId) return;

    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt")
    );

    const unsub = onSnapshot(q, (snap) => {
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      setMessages(arr);
    });

    return () => unsub();
  }, [chatId]);

  const send = async (text) => {
    await sendMessageFn({ chatId, text });
  };

  return { messages, send };
};
