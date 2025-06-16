// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import ScoreBreakdownCard from '../components/ScoreBreakdownCard';

// Simulate async API call
const fetchMockProperty = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        distanceToTransport: 0.6,
        distanceToShops: 0.4,
        distanceToParks: 0.3,
        floodZone: 'Low',
        crimeRate: 25,
        nbnAvailable: true,
        distanceToBestSchool: 1.2,
        walkabilityScore: 80,
        cafeProximityScore: 70,
        noiseLevelScore: 60,
      });
    }, 1000);
  });

const Home = () => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchMockProperty().then(setProperty);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">🏡 Property Insight</h1>
      {!property ? (
        <div className="text-gray-600 animate-pulse">Loading property data...</div>
      ) : (
        <ScoreBreakdownCard propertyData={property} />
      )}
    </div>
  );
};

export default Home;
