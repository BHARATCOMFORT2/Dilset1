import { Link } from "react-router-dom";

export default function MatchCard({ match, currentUser }) {
  const otherUser = match.users.find((u) => u !== currentUser);
  const chatId = match.id;

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>Match</h3>
      <p>User: {otherUser}</p>

      <Link to={`/chat/${chatId}`}>
        <button>Open Chat</button>
      </Link>
    </div>
  );
}
