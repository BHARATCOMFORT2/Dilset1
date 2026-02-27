export default function FilterBar({ filters, setFilters, showReligion }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <select
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        placeholder="City"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      />

      <input
        placeholder="Min Age"
        type="number"
        value={filters.minAge}
        onChange={(e) => setFilters({ ...filters, minAge: e.target.value })}
      />

      <input
        placeholder="Max Age"
        type="number"
        value={filters.maxAge}
        onChange={(e) => setFilters({ ...filters, maxAge: e.target.value })}
      />

      {showReligion && (
        <input
          placeholder="Religion"
          value={filters.religion}
          onChange={(e) =>
            setFilters({ ...filters, religion: e.target.value })
          }
        />
      )}
    </div>
  );
}
