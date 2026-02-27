import { useParams } from "react-router-dom";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function ProfileView() {
  const { uid } = useParams();
  const profile = useUserProfile(uid);

  if (!profile) return <div>Loading profile...</div>;

  const photo =
    profile.photos && profile.photos.length > 0
      ? profile.photos[0]
      : "https://via.placeholder.com/200";

  return (
    <div style={{ padding: 20 }}>
      <img
        src={photo}
        alt="profile"
        style={{ width: 200, height: 200, borderRadius: 12 }}
      />

      <h2>{profile.name}</h2>
      <p>{profile.age} • {profile.city}</p>

      {profile.bio && <p>{profile.bio}</p>}

      <h3>Intent</h3>
      <ul>
        {profile.intentDating && <li>Dating</li>}
        {profile.intentMarriage && <li>Marriage</li>}
        {profile.intentFriendship && <li>Friendship</li>}
        {profile.intentTalk && <li>Talk</li>}
        {profile.intentRemarriage && <li>Remarriage</li>}
      </ul>

      <h3>Details</h3>
      <p>Religion: {profile.religion}</p>
      <p>Education: {profile.education}</p>
      <p>Job: {profile.job}</p>

      {profile.divorceStatus && (
        <>
          <h3>Remarriage</h3>
          <p>Status: {profile.divorceStatus}</p>
          <p>Children: {profile.children}</p>
        </>
      )}
    </div>
  );
}
