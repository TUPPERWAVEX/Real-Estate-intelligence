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
      position: 'absolute', top: 10, left: 10, background: 'white', padding: '10px', borderRadius: '8px', zIndex: 1000
    }}>
      <h4>Filters</h4>
      <div>
        <label>Min Beds: </label>
        <input type="number" name="beds" value={filters.beds} onChange={handleChange} min="0" />
      </div>
      <div>
        <label>Min Baths: </label>
        <input type="number" name="baths" value={filters.baths} onChange={handleChange} min="0" />
      </div>
      <div>
        <label>Min Score: </label>
        <input type="number" name="score" value={filters.score} onChange={handleChange} min="0" />
      </div>
      <div>
        <label>Suburb: </label>
        <input type="text" name="suburb" value={filters.suburb} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FilterPanel;
