import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useAdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "profiles"));
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  return users;
}
