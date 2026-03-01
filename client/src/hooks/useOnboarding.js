import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function useOnboarding(userId) {
  const [profile, setProfile] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!userId) return;

    async function load() {
      const snap = await getDoc(doc(db, "profiles", userId));
      if (snap.exists()) {
        const data = snap.data();
        setProfile(data);
        setCompleted(!!data.onboardingComplete);
      }
    }

    load();
  }, [userId]);

  async function saveStep(data) {
    await updateDoc(doc(db, "profiles", userId), data);
    setProfile((p) => ({ ...p, ...data }));
  }

  async function complete() {
    await updateDoc(doc(db, "profiles", userId), {
      onboardingComplete: true,
    });
    setCompleted(true);
  }

  return { profile, completed, saveStep, complete };
}
