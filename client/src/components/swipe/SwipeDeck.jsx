import React, { useState } from "react";
import SwipeCard from "./SwipeCard";
import SwipeButtons from "./SwipeButtons";

export default function SwipeDeck({ profiles = [], onLike, onPass }) {
  const [index, setIndex] = useState(0);

  if (!profiles.length) {
    return <div className="swipe-empty">No more profiles</div>;
  }

  const current = profiles[index];

  function handleLike() {
    onLike && onLike(current);
    next();
  }

  function handlePass() {
    onPass && onPass(current);
    next();
  }

  function next() {
    setIndex((i) => i + 1);
  }

  return (
    <div className="swipe-deck">
      <SwipeCard profile={current} />
      <SwipeButtons onLike={handleLike} onPass={handlePass} />
    </div>
  );
}
