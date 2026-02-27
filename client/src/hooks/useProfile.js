import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { getProfile, saveProfile } from "../firebase/firestore";

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      const data = await getProfile(user.uid);
      setProfile(data);
      setLoading(false);
    };

    load();
  }, [user]);

  const update = async (data) => {
    await saveProfile(user.uid, data);
    setProfile((prev) => ({ ...prev, ...data }));
  };

  return { profile, loading, update };
};
