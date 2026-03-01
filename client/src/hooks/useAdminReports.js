import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useAdminReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "reports"));
      setReports(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  return reports;
}
