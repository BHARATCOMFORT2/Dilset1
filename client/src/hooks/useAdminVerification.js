import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useAdminVerification() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "verification"));
      setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  return requests;
}
