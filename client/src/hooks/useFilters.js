import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    gender: "",
    city: "",
    minAge: "",
    maxAge: "",
    religion: ""
  });

  const apply = (profiles) => {
    return profiles.filter((p) => {
      if (filters.gender && p.gender !== filters.gender) return false;
      if (filters.city && p.city !== filters.city) return false;

      if (filters.minAge && p.age < Number(filters.minAge)) return false;
      if (filters.maxAge && p.age > Number(filters.maxAge)) return false;

      if (filters.religion && p.religion !== filters.religion) return false;

      return true;
    });
  };

  return { filters, setFilters, apply };
};
