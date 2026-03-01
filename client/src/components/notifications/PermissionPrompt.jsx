import React, { useState } from "react";

export default function PermissionPrompt({ onAllow }) {
  const [asked, setAsked] = useState(false);

  async function requestPermission() {
    setAsked(true);

    try {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        onAllow && onAllow();
      }
    } catch (e) {
      console.error("Notification error", e);
    }
  }

  if (asked) return null;

  return (
    <div className="notif-prompt">
      <p>Enable notifications for matches & messages</p>
      <button onClick={requestPermission}>
        Allow Notifications
      </button>
    </div>
  );
}
