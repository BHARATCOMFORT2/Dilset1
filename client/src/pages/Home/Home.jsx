import { Link } from "react-router-dom";
import ModeTabs from "../../components/layout/ModeTabs";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to DilSet</h2>
      <p>Choose how you want to connect</p>

      <ModeTabs />

      <div style={{ marginTop: 30 }}>
        <h3>Quick Start</h3>

        <div style={{ display: "grid", gap: 10 }}>
          <Link to="/random"><button>🎲 Random Chat</button></Link>
          <Link to="/dating"><button>❤️ Dating</button></Link>
          <Link to="/friendship"><button>🤝 Friendship</button></Link>
          <Link to="/marriage"><button>💍 Marriage</button></Link>
          <Link to="/remarriage"><button>🔄 Remarriage</button></Link>
          <Link to="/talk"><button>💚 Talk Support</button></Link>
        </div>
      </div>
    </div>
  );
}
