import { db } from "../firebase/config";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function useSwipe(userId, mode) {
  async function like(targetId) {
    const ref = doc(db, "swipes", `${userId}_${targetId}`);
    await setDoc(ref, {
      from: userId,
      to: targetId,
      mode,
      action: "like",
      createdAt: Date.now(),
    });

    // check reciprocal
    const reverseRef = doc(db, "swipes", `${targetId}_${userId}`);
    const snap = await getDoc(reverseRef);

    if (snap.exists() && snap.data().action === "like") {
      // create match
      const matchId = `${userId}_${targetId}`;
      await setDoc(doc(db, "matches", matchId), {
        users: [userId, targetId],
        mode,
        createdAt: Date.now(),
      });

      return { match: true };
    }

    return { match: false };
  }

  async function pass(targetId) {
    const ref = doc(db, "swipes", `${userId}_${targetId}`);
    await setDoc(ref, {
      from: userId,
      to: targetId,
      mode,
      action: "pass",
      createdAt: Date.now(),
    });
  }

  async function loadQueue() {
    const q = query(
      collection(db, "profiles"),
      where("intent", "==", mode)
    );
    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
  }

  return { like, pass, loadQueue };
}
