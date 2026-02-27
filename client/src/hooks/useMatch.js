import { useState } from "react";
import { likeUser } from "../modes/dating/datingService";

export const useMatch = () => {
  const [loading, setLoading] = useState(false);
  const [matchedUser, setMatchedUser] = useState(null);

  const like = async (uid) => {
    setLoading(true);
    const res = await likeUser(uid);
    setLoading(false);

    if (res.match) {
      setMatchedUser(uid);
    }
  };

  return { like, loading, matchedUser };
};
