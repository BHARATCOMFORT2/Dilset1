import React, { useState } from "react";

const DEFAULT_INTERESTS = [
  "Travel",
  "Music",
  "Movies",
  "Sports",
  "Gym",
  "Food",
  "Spirituality",
  "Reading",
  "Gaming",
  "Photography",
];

export default function InterestSelect({
  value = [],
  onChange,
  options = DEFAULT_INTERESTS,
}) {
  const [selected, setSelected] = useState(value);

  function toggleInterest(i) {
    let updated;
    if (selected.includes(i)) {
      updated = selected.filter((x) => x !== i);
    } else {
      updated = [...selected, i];
    }
    setSelected(updated);
    onChange && onChange(updated);
  }

  return (
    <div className="interest-select">
      {options.map((i) => (
        <button
          key={i}
          type="button"
          className={`interest-chip ${
            selected.includes(i) ? "active" : ""
          }`}
          onClick={() => toggleInterest(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
}
