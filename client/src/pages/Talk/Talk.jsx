import { useEffect, useState } from "react";
import { useTalk } from "../../hooks/useTalk";
import { useNavigate } from "react-router-dom";

export default function Talk() {
  const { join, loading, chatId } = useTalk();
  const nav = useNavigate();
  const [role, setRole] = useState("talker");

  useEffect(() => {
    if (chatId) {
      nav(`/chat/${chatId}`);
    }
  }, [chatId]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Talk Support</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="talker">I want to talk</option>
        <option value="listener">I want to listen</option>
      </select>

      <br /><br />

      <button onClick={() => join({ role })} disabled={loading}>
        {loading ? "Connecting..." : "Start Talk"}
      </button>
    </div>
  );
}
