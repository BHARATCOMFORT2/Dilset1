export default function Notifications({ items = [] }) {
  if (!items.length) return <div>No notifications</div>;

  return (
    <div style={{ padding: 10 }}>
      {items.map((n) => (
        <div key={n.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
          <b>{n.type}</b> from {n.from}
        </div>
      ))}
    </div>
  );
}
