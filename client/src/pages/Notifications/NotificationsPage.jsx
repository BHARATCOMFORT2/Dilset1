import { useNotifications } from "../../hooks/useNotifications";
import { Link } from "react-router-dom";

export default function NotificationsPage() {
  const { notifications, markRead } = useNotifications();

  if (!notifications.length) {
    return <div style={{ padding: 20 }}>No notifications</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Notifications</h2>

      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            borderBottom: "1px solid #eee",
            padding: 10,
            background: n.read ? "#fff" : "#f5f9ff",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            {n.type === "like" && <span>❤️ Someone liked you</span>}
            {n.type === "match" && <span>🎉 You have a match</span>}
            {n.type === "friend" && <span>🤝 Friend request</span>}
            {n.type === "marriage" && <span>💍 Marriage interest</span>}
          </div>

          <Link
            to={`/user/${n.from}`}
            onClick={() => markRead(n.id)}
          >
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
