import { useState } from "react";
import { usePhotoUpload } from "../../hooks/usePhotoUpload";

export default function PhotoUpload({ onUploaded }) {
  const [file, setFile] = useState(null);
  const { upload, uploading } = usePhotoUpload();

  const handleUpload = async () => {
    const url = await upload(file);
    if (onUploaded) onUploaded(url);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
    </div>
  );
}
