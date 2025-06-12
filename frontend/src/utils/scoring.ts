import { Property, ScoreBreakdown } from "../types";

// Stub functions – replace these with real data sources
function getFloodRiskScore(lat: number, lng: number): number {
  return 8; // out of 20
}

function getTransportProximityScore(lat: number, lng: number): number {
  return 18; // out of 20
}

function getCrimeRateScore(lat: number, lng: number): number {
  return 14; // out of 20
}

function getSchoolCatchmentScore(address: string): number {
  return 17; // out of 20
}

function getLifestyleScore(lat: number, lng: number): number {
  return 16; // out of 20
}

export function scoreProperty(property: Property): { totalScore: number; breakdown: ScoreBreakdown } {
  const floodRisk = getFloodRiskScore(property.lat, property.lng);
  const transport = getTransportProximityScore(property.lat, property.lng);
  const crime = getCrimeRateScore(property.lat, property.lng);
  const school = getSchoolCatchmentScore(property.address);
  const lifestyle = getLifestyleScore(property.lat, property.lng);

  const total = floodRisk + transport + crime + school + lifestyle;

  return {
    totalScore: total,
    breakdown: {
      floodRisk,
      transportProximity: transport,
      crimeRate: crime,
      schoolCatchment: school,
      lifestyle,
    }
  };
}
