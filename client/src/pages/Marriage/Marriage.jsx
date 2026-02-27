import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useMarriage } from "../../hooks/useMarriage";
import UserCard from "../../components/cards/UserCard";
import { useMarriage } from "../../hooks/useMarriage";

export default function Marriage() {
  const [profiles, setProfiles] = useState([]);
  const { sendInterest } = useMarriage();

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "profiles"));
      const arr = [];
      snap.forEach((d) => {
        const data = d.data();
        if (data.intentMarriage) arr.push({ id: d.id, ...data });
      });
      setProfiles(arr);
    };
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Marriage Matches</h2>
{profiles.map((p) => (
  <UserCard
    key={p.id}
    profile={p}
    actionLabel="Send Interest"
    onAction={sendInterest}
  />
))}
      {profiles.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.age} • {p.city}</p>
          <p>{p.religion}</p>

          <button onClick={() => sendInterest(p.id)}>
            Send Interest
          </button>
        </div>
      ))}
    </div>
  );
}
