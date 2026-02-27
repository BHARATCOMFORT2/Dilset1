import { Link, useLocation } from "react-router-dom";

const modes = [
  { name: "Random", path: "/random" },
  { name: "Friendship", path: "/friendship" },
  { name: "Dating", path: "/dating" },
  { name: "Marriage", path: "/marriage" },
  { name: "Remarriage", path: "/remarriage" },
  { name: "Talk", path: "/talk" }
];

export default function ModeTabs() {
  const loc = useLocation();

  return (
    <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
      {modes.map((m) => (
        <Link key={m.path} to={m.path}>
          <button
            style={{
              padding: "8px 14px",
              borderRadius: 20,
              border: "1px solid #ccc",
              background: loc.pathname === m.path ? "#ff4d6d" : "#fff",
              color: loc.pathname === m.path ? "#fff" : "#000"
            }}
          >
            {m.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
