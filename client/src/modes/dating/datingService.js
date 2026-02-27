import { functions } from "../../firebase/config";
import { httpsCallable } from "firebase/functions";

const likeUserFn = httpsCallable(functions, "likeUser");

export const likeUser = async (to) => {
  const res = await likeUserFn({ to });
  return res.data;
};
