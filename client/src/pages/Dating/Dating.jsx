import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { useMatch } from "../../hooks/useMatch";

export default function Dating() {
  const { user } = useAuth();
  const { like, matchedUser } = useMatch();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "profiles"));
      const arr = [];
      snap.forEach((d) => {
        if (d.id !== user.uid) arr.push({ id: d.id, ...d.data() });
      });
      setProfiles(arr);
    };

    load();
  }, [user]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dating</h2>

      {profiles.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.age} • {p.city}</p>
          <p>{p.bio}</p>

          <button onClick={() => like(p.id)}>❤️ Like</button>
        </div>
      ))}

      {matchedUser && (
        <div style={{ background: "#ffdddd", padding: 10 }}>
          🎉 It's a match!
        </div>
      )}
    </div>
  );
}
