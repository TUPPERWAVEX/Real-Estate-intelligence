import React from 'react';

const ScoreCard = ({ property }) => {
  if (!property) return null;
  const { address, beds, baths, score, breakdown } = property;

  const circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: `conic-gradient(#4caf50 ${score * 3.6}deg, #ddd 0deg)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px auto'
  };

  return (
    <div style={{ padding: '10px', background: '#fff', borderRadius: '8px', width: '250px' }}>
      <h3 style={{ margin: 0 }}>{address}</h3>
      <div style={circleStyle}>{score}</div>
      <p>{beds} beds • {baths} baths</p>
      <ul style={{ paddingLeft: '1rem' }}>
        {Object.entries(breakdown).map(([key, value]) => (
          <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}/10</li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreCard;
