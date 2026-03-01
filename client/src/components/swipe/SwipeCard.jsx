import React from "react";

export default function SwipeCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="swipe-card">
      <div
        className="swipe-photo"
        style={{
          backgroundImage: `url(${profile.photoUrl || "/placeholder.jpg"})`,
        }}
      />

      <div className="swipe-info">
        <h2>
          {profile.name}, {profile.age}
        </h2>
        <p>{profile.city}</p>
        {profile.intent && (
          <span className="intent-badge">{profile.intent}</span>
        )}
      </div>
    </div>
  );
}
