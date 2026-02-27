import { Link } from "react-router-dom";

export default function RemarriageCard({ profile }) {
  const chatId = profile.id;

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>{profile.name}</h3>
      <p>{profile.age} • {profile.city}</p>
      <p>Status: {profile.divorceStatus}</p>
      <p>Children: {profile.children}</p>

      <Link to={`/chat/${chatId}`}>
        <button>Chat</button>
      </Link>
    </div>
  );
}
