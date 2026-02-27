import { Link } from "react-router-dom";

export default function UserCard({ profile, actionLabel, onAction }) {
  const photo =
    profile.photos && profile.photos.length > 0
      ? profile.photos[0]
      : "https://via.placeholder.com/150";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        width: 220
      }}
    >
      <img
        src={photo}
        alt="profile"
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 10
        }}
      />

      <h3>{profile.name || "User"}</h3>
      <p>
        {profile.age} • {profile.city}
      </p>

      {profile.bio && <p>{profile.bio}</p>}

      {onAction && (
        <button onClick={() => onAction(profile.id)}>
          {actionLabel}
        </button>
      )}

      <Link to={`/chat/${profile.id}`}>
        <button>Chat</button>
      </Link>
    </div>
  );
}
