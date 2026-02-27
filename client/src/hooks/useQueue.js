import { useState } from "react";
import { functions } from "../firebase/config";
import { httpsCallable } from "firebase/functions";

const joinFn = httpsCallable(functions, "joinRandom");

export const useQueue = () => {
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState(null);

  const join = async (prefs = {}) => {
    setLoading(true);
    const res = await joinFn(prefs);
    setLoading(false);

    if (res.data?.chatId) {
      setChatId(res.data.chatId);
    }
  };

  return { join, loading, chatId };
};
