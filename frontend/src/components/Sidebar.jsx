import { useState } from 'react';

const Sidebar = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ padding: '1rem', width: '260px', background: '#f4f4f4', height: '100vh' }}>
      <h3>Filter Properties</h3>

      <label>
        Min Score: {filters.minScore}
        <input
          type="range"
          min={0}
          max={100}
          value={filters.minScore}
          onChange={(e) => handleChange("minScore", Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </label>

      <br /><br />

      <label>
        Min Bedrooms:
        <input
          type="number"
          min={0}
          value={filters.minBedrooms}
          onChange={(e) => handleChange("minBedrooms", Number(e.target.value))}
          style={{ width: '100%
