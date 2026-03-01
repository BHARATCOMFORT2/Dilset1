import React from "react";

export default function PreferenceForm({ value = {}, onChange }) {
  function update(field, val) {
    onChange && onChange({ ...value, [field]: val });
  }

  return (
    <div className="pref-form">
      <div className="field">
        <label>Interested In</label>
        <select
          value={value.gender || ""}
          onChange={(e) => update("gender", e.target.value)}
        >
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="any">Any</option>
        </select>
      </div>

      <div className="field">
        <label>Age Range</label>
        <div className="range">
          <input
            type="number"
            placeholder="Min"
            value={value.ageMin || ""}
            onChange={(e) => update("ageMin", e.target.value)}
          />
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            value={value.ageMax || ""}
            onChange={(e) => update("ageMax", e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label>Mode</label>
        <select
          value={value.mode || ""}
          onChange={(e) => update("mode", e.target.value)}
        >
          <option value="">Select</option>
          <option value="dating">Dating</option>
          <option value="marriage">Marriage</option>
          <option value="friendship">Friendship</option>
          <option value="remarriage">Remarriage</option>
        </select>
      </div>
    </div>
  );
}
