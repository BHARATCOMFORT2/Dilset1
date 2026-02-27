import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useUserProfile = (uid) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!uid) return;

    const load = async () => {
      const snap = await getDoc(doc(db, "profiles", uid));
      if (snap.exists()) {
        setProfile({ id: snap.id, ...snap.data() });
      }
    };

    load();
  }, [uid]);

  return profile;
};
