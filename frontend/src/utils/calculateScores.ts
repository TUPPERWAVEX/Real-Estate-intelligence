// src/utils/calculateScores.ts

import { PropertyData } from "../types";

// --- Proximity Score ---
function calculateProximityScore(data: PropertyData): number {
  const transportWeight = 0.5;
  const shopsWeight = 0.3;
  const parksWeight = 0.2;

  const score =
    (1 - data.distanceToTransport / 1000) * transportWeight +
    (1 - data.distanceToShops / 1000) * shopsWeight +
    (1 - data.distanceToParks / 1000) * parksWeight;

  return Math.max(0, Math.min(score * 100, 100));
}

// --- Flood Risk Score ---
function calculateFloodRiskScore(data: PropertyData): number {
  switch (data.floodZone?.toLowerCase()) {
    case "none":
      return 100;
    case "low":
      return 75;
    case "medium":
      return 40;
    case "high":
      return 10;
    default:
      return 0;
  }
}

// --- Crime Score ---
function calculateCrimeScore(data: PropertyData): number {
  const safeCrimeRate = 30; // per 1000 residents
  const raw = 100 - (data.crimeRate / safeCrimeRate) * 100;
  return Math.max(0, Math.min(raw, 100));
}

// --- Internet/NBN Score ---
function calculateInternetScore(data: PropertyData): number {
  return data.nbnAvailable ? 100 : 0;
}

// --- School Catchment Score ---
function calculateSchoolScore(data: PropertyData): number {
  const maxDistance = 5; // km
  const score = 100 - (data.distanceToBestSchool / maxDistance) * 100;
  return Math.max(0, Math.min(score, 100));
}

// --- Lifestyle Score ---
function calculateLifestyleScore(data: PropertyData): number {
  const score =
    (data.walkabilityScore ?? 0) * 0.5 +
    (data.cafeProximityScore ?? 0) * 0.3 +
    (data.noiseLevelScore ?? 0) * 0.2;

  return Math.max(0, Math.min(score, 100));
}

// --- Total Score ---
export function calculateScores(data: PropertyData) {
  const proximity = calculateProximityScore(data);
  const flood = calculateFloodRiskScore(data);
  const crime = calculateCrimeScore(data);
  const internet = calculateInternetScore(data);
  const schools = calculateSchoolScore(data);
  const lifestyle = calculateLifestyleScore(data);

  const totalScore =
    0.2 * proximity +
    0.2 * flood +
    0.2 * crime +
    0.1 * internet +
    0.2 * schools +
    0.1 * lifestyle;

  return {
    totalScore: Math.round(totalScore),
    breakdown: {
      proximity,
      flood,
      crime,
      internet,
      schools,
      lifestyle,
    },
  };
}
