import React from "react";

export default function SwipeButtons({ onLike, onPass }) {
  return (
    <div className="swipe-buttons">
      <button className="pass-btn" onClick={onPass}>
        ❌
      </button>

      <button className="like-btn" onClick={onLike}>
        ❤️
      </button>
    </div>
  );
}
