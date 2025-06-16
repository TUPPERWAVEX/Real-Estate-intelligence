// src/pages/Home.jsx

import React from 'react';
import ScoreBreakdownCard from '../components/ScoreBreakdownCard';

// Temporary mock property data
const mockProperty = {
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
};

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">🏡 Property Insight</h1>
      <ScoreBreakdownCard propertyData={mockProperty} />
    </div>
  );
};

export default Home;
