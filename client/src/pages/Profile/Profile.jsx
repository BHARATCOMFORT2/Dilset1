import { useState, useEffect } from "react";
import { useProfile } from "../../hooks/useProfile";
import PhotoUpload from "../../components/ui/PhotoUpload";
export default function Profile() {
  const { profile, loading, update } = useProfile();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    city: "",
    bio: "",
    intentDating: false,
    intentMarriage: false,
    intentFriendship: false,
    intentTalk: false
  });

  useEffect(() => {
    if (profile) setForm(profile);
  }, [profile]);

  if (loading) return <div>Loading profile...</div>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const save = async () => {
    await update(form);
    alert("Profile saved");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Profile</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name || ""}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={form.age || ""}
        onChange={handleChange}
      />

      <select
        name="gender"
        value={form.gender || ""}
        onChange={handleChange}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        name="city"
        placeholder="City"
        value={form.city || ""}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Bio"
        value={form.bio || ""}
        onChange={handleChange}
      />

      <h4>Intent</h4>

      <label>
        <input
          type="checkbox"
          name="intentDating"
          checked={form.intentDating || false}
          onChange={handleChange}
        />
        Dating
      </label>

      <label>
        <input
          type="checkbox"
          name="intentMarriage"
          checked={form.intentMarriage || false}
          onChange={handleChange}
        />
        Marriage
      </label>

      <label>
        <input
          type="checkbox"
          name="intentFriendship"
          checked={form.intentFriendship || false}
          onChange={handleChange}
        />
        Friendship
      </label>

      <label>
        <input
          type="checkbox"
          name="intentTalk"
          checked={form.intentTalk || false}
          onChange={handleChange}
        />
        Talk
      </label>

      <br />
      <button onClick={save}>Save Profile</button>
    </div>
  );
}
