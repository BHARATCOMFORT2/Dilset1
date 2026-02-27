import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useFriends } from "../../hooks/useFriends";

export default function Friendship() {
  const [users, setUsers] = useState([]);
  const { add } = useFriends();

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "profiles"));
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      setUsers(arr);
    };
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Find Friends</h2>

      {users.map((u) => (
        <div key={u.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{u.name}</h3>
          <p>{u.city}</p>
          <button onClick={() => add(u.id)}>Add Friend</button>
        </div>
      ))}
    </div>
  );
}
