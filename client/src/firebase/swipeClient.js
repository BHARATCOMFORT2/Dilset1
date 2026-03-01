import { db } from "./config";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function sendSwipe(from, to, mode, action) {
  const id = `${from}_${to}`;

  await setDoc(doc(db, "swipes", id), {
    from,
    to,
    mode,
    action,
    createdAt: Date.now(),
  });

  if (action !== "like") return { match: false };

  const reverse = await getDoc(doc(db, "swipes", `${to}_${from}`));

  if (reverse.exists() && reverse.data().action === "like") {
    const matchId = `${from}_${to}`;

    await setDoc(doc(db, "matches", matchId), {
      users: [from, to],
      mode,
      createdAt: Date.now(),
    });

    return { match: true };
  }

  return { match: false };
}
