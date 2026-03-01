import React from "react";

export default function Stepper({ steps = [], current = 0 }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`step ${i === current ? "active" : ""} ${
            i < current ? "done" : ""
          }`}
        >
          <div className="circle">{i + 1}</div>
          <div className="label">{s}</div>
        </div>
      ))}
    </div>
  );
}
