import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useRemarriage } from "../../hooks/useRemarriage";

export default function Remarriage() {
  const [profiles, setProfiles] = useState([]);
  const { sendInterest } = useRemarriage();

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "profiles"));
      const arr = [];
      snap.forEach((d) => {
        const data = d.data();
        if (data.intentRemarriage || data.divorceStatus) {
          arr.push({ id: d.id, ...data });
        }
      });
      setProfiles(arr);
    };
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Remarriage Matches</h2>

      {profiles.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.age} • {p.city}</p>
          <p>Status: {p.divorceStatus}</p>

          <button onClick={() => sendInterest(p.id)}>
            Send Interest
          </button>
        </div>
      ))}
    </div>
  );
}
