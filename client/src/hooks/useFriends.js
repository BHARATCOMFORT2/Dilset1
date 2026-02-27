import { useState } from "react";
import { functions } from "../firebase/config";
import { httpsCallable } from "firebase/functions";

const addFn = httpsCallable(functions, "addFriend");
const acceptFn = httpsCallable(functions, "acceptFriend");

export const useFriends = () => {
  const [loading, setLoading] = useState(false);

  const add = async (uid) => {
    setLoading(true);
    await addFn({ to: uid });
    setLoading(false);
  };

  const accept = async (uid) => {
    setLoading(true);
    await acceptFn({ from: uid });
    setLoading(false);
  };

  return { add, accept, loading };
};
