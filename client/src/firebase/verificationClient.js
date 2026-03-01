import { db, storage } from "./config";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export async function uploadVerificationImage(userId, base64, type) {
  const path = `verification/${userId}_${type}.jpg`;
  const storageRef = ref(storage, path);

  await uploadString(storageRef, base64, "data_url");
  return await getDownloadURL(storageRef);
}

export async function submitVerification(userId, selfieBase64, idBase64) {
  const selfieUrl = await uploadVerificationImage(
    userId,
    selfieBase64,
    "selfie"
  );
  const idUrl = await uploadVerificationImage(
    userId,
    idBase64,
    "id"
  );

  await setDoc(doc(db, "verification", userId), {
    userId,
    selfieUrl,
    idUrl,
    status: "pending",
    createdAt: Date.now(),
  });
}
