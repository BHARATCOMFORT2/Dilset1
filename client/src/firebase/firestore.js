import { db } from "./config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// get profile
export const getProfile = async (uid) => {
  const ref = doc(db, "profiles", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

// create/update profile
export const saveProfile = async (uid, data) => {
  const ref = doc(db, "profiles", uid);
  return setDoc(ref, data, { merge: true });
};

// update fields
export const updateProfile = async (uid, data) => {
  const ref = doc(db, "profiles", uid);
  return updateDoc(ref, data);
};
