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
          max={120}
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
          style={{ width: '100%' }}
        />
      </label>

      <br /><br />

      <label>
        Max Price:
        <input
          type="number"
          min={0}
          value={filters.maxPrice}
          onChange={(e) => handleChange("maxPrice", Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </label>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={filters.includeFlood}
          onChange={(e) => handleChange("includeFlood", e.target.checked)}
        />
        Include Flood Score
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.includeCrime}
          onChange={(e) => handleChange("includeCrime", e.target.checked)}
        />
        Include Crime Score
      </label>

      <br /><br />
      <h4>Map Layers</h4>

      <label>
        <input
          type="checkbox"
          checked={filters.showHeatmap}
          onChange={(e) => handleChange("showHeatmap", e.target.checked)}
        />
        Show Heatmap
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={filters.showPopups}
          onChange={(e) => handleChange("showPopups", e.target.checked)}
        />
        Show Score Popups
      </label>

      <br /><br />
      <h4>Bookmarks</h4>

      <label>
        <input
          type="checkbox"
          checked={filters.savedOnly}
          onChange={(e) => handleChange("savedOnly", e.target.checked)}
        />
        Show Saved Only
      </label>
    </div>
  );
};

export default Sidebar;
