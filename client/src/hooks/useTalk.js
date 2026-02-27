import { useState } from "react";
import { functions } from "../firebase/config";
import { httpsCallable } from "firebase/functions";

const joinTalkFn = httpsCallable(functions, "joinTalk");

export const useTalk = () => {
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState(null);

  const join = async (prefs) => {
    setLoading(true);
    const res = await joinTalkFn(prefs);
    setLoading(false);

    if (res.data?.chatId) {
      setChatId(res.data.chatId);
    }
  };

  return { join, loading, chatId };
};
