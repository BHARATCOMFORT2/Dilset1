import { Link } from "react-router-dom";

export default function FriendCard({ userId }) {
  const chatId = userId; // chat id later pair-based

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <p>User: {userId}</p>

      <Link to={`/chat/${chatId}`}>
        <button>Chat</button>
      </Link>
    </div>
  );
}
