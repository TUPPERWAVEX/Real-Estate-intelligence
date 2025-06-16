import React from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'suburb' ? value : parseInt(value)
    }));
  };

  return (
    <div style={{
      position: 'absolute',
      top: 10,
      left: 10,
      background: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      zIndex: 1000,
      width: '200px'
    }}>
      <h4 style={{ marginTop: 0 }}>Filters</h4>

      <label>Min Beds:</label>
      <input
        type="number"
        name="beds"
        value={filters.beds}
        onChange={handleChange}
        min="0"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Min Baths:</label>
      <input
        type="number"
        name="baths"
        value={filters.baths}
        onChange={handleChange}
        min="0"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Min Score:</label>
      <input
        type="number"
        name="score"
        value={filters.score}
        onChange={handleChange}
        min="0"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Suburb:</label>
      <input
        type="text"
        name="suburb"
        value={filters.suburb}
        onChange={handleChange}
        placeholder="e.g. Indooroopilly"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default FilterPanel;
