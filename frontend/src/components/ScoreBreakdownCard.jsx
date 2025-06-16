// src/components/ScoreBreakdownCard.jsx

import React from 'react';
import { calculateScores } from '../utils/calculateScores';

/**
 * Props:
 * - propertyData: PropertyData
 */
const ScoreBreakdownCard = ({ propertyData }) => {
  const { totalScore, breakdown } = calculateScores(propertyData);

  return (
    <div className="rounded-2xl shadow-md bg-white p-6 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Property Score: {totalScore}/100</h2>
      <div className="space-y-2">
        {Object.entries(breakdown).map(([category, score]) => (
          <div key={category} className="flex justify-between border-b py-1 text-sm text-gray-700">
            <span className="capitalize">{category}</span>
            <span>{Math.round(score)} / 100</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBreakdownCard;
