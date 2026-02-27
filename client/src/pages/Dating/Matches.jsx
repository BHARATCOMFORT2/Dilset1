import { useAuth } from "../../hooks/useAuth";
import { useMatches } from "../../hooks/useMatches";
import MatchCard from "../../components/cards/MatchCard";

export default function Matches() {
  const { user } = useAuth();
  const { matches } = useMatches();

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Matches</h2>

      {matches.length === 0 && <p>No matches yet</p>}

      {matches.map((m) => (
        <MatchCard key={m.id} match={m} currentUser={user.uid} />
      ))}
    </div>
  );
}
