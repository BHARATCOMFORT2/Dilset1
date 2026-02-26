import { auth } from "./config";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

export const setupRecaptcha = (phoneNumber) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { size: "invisible" },
    auth
  );

  return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
};

export const observeAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const logout = () => signOut(auth);
