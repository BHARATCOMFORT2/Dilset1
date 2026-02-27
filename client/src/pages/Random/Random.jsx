import { useEffect } from "react";
import { useQueue } from "../../hooks/useQueue";
import { useNavigate } from "react-router-dom";

export default function Random() {
  const { join, loading, chatId } = useQueue();
  const nav = useNavigate();

  useEffect(() => {
    if (chatId) {
      nav(`/chat/${chatId}`);
    }
  }, [chatId]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Random Chat</h2>

      <button onClick={() => join()} disabled={loading}>
        {loading ? "Searching..." : "Start Random Chat"}
      </button>
    </div>
  );
}
