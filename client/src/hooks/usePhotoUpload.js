import { useState } from "react";
import { uploadProfilePhoto } from "../firebase/storage";
import { useAuth } from "./useAuth";
import { updateProfile } from "../firebase/firestore";

export const usePhotoUpload = () => {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);

  const upload = async (file) => {
    if (!file) return;
    setUploading(true);

    const url = await uploadProfilePhoto(user.uid, file);

    await updateProfile(user.uid, {
      photos: [url]
    });

    setUploading(false);
    return url;
  };

  return { upload, uploading };
};
