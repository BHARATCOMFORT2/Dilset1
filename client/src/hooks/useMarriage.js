import { useState } from "react";
import { functions } from "../firebase/config";
import { httpsCallable } from "firebase/functions";

const sendFn = httpsCallable(functions, "sendMarriageInterest");
const acceptFn = httpsCallable(functions, "acceptMarriage");

export const useMarriage = () => {
  const [loading, setLoading] = useState(false);

  const sendInterest = async (uid) => {
    setLoading(true);
    await sendFn({ to: uid });
    setLoading(false);
  };

  const accept = async (uid) => {
    setLoading(true);
    await acceptFn({ from: uid });
    setLoading(false);
  };

  return { sendInterest, accept, loading };
};
