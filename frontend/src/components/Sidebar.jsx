import { useState } from 'react';

const Sidebar = ({ minScore, setMinScore }) => {
  return (
    <div style={{ padding: '1rem', width: '250px', background: '#f4f4f4', height: '100vh' }}>
      <h3>Filter Properties</h3>
      <label>
        Min Score: {minScore}
        <input
          type="range"
          min={0}
          max={100}
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </label>
    </div>
  );
};

export default Sidebar;
