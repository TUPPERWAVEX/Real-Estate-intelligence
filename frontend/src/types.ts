// src/types.ts

export interface PropertyData {
  // Proximity
  distanceToTransport: number;    // in km
  distanceToShops: number;        // in km
  distanceToParks: number;        // in km

  // Flood
  floodZone: 'None' | 'Low' | 'Medium' | 'High' | string;

  // Crime
  crimeRate: number;              // per 1000 residents

  // Internet
  nbnAvailable: boolean;

  // Schools
  distanceToBestSchool: number;   // in km

  // Lifestyle
  walkabilityScore?: number;      // 0–100
  cafeProximityScore?: number;    // 0–100
  noiseLevelScore?: number;       // 0–100
}
