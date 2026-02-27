import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../firebase/auth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        borderBottom: "1px solid #eee"
      }}
    >
      <Link to="/home">
        <b>DilSet</b>
      </Link>

      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/matches">Matches</Link>
        <Link to="/profile">Profile</Link>

        {user && (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
}
