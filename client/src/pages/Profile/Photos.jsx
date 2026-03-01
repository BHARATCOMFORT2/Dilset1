import { useProfile } from "../../hooks/useProfile";
import PhotoUpload from "../../components/ui/PhotoUpload";
import PhotoGallery from "../../components/ui/PhotoGallery";
import { updateProfile } from "../../firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

export default function Photos() {
  const { profile } = useProfile();
  const { user } = useAuth();

  if (!profile) return <div>Loading...</div>;

  const remove = async (url) => {
    const updated = profile.photos.filter((p) => p !== url);
    await updateProfile(user.uid, { photos: updated });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Photos</h2>

      <PhotoUpload />

      <div style={{ marginTop: 20 }}>
        {profile.photos?.length ? (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {profile.photos.map((p) => (
              <div key={p}>
                <img
                  src={p}
                  alt=""
                  style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
                />
                <button onClick={() => remove(p)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No photos uploaded</p>
        )}
      </div>
    </div>
  );
}
