import { useEffect, useState } from "react";
import { getAdminStats } from "../firebase/adminClient";

export default function useAdminStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getAdminStats().then(setStats);
  }, []);

  return stats;
}
