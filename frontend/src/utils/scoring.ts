import { Property, ScoreBreakdown } from "../types";
import { getFloodRiskScore } from "../data/floodZones";
import { getTransportProximityScore } from "../data/transport";
import { getCrimeRateScore } from "../data/crimeRates";
import { getSchoolCatchmentScore } from "../data/schoolCatchments";
import { getLifestyleScore } from "../data/lifestyle";
import { getDAActivityScore } from "../data/devApplications";
import { getNBNScore } from "../data/nbn";

export function scoreProperty(property: Property): { totalScore: number; breakdown: ScoreBreakdown } {
  const floodRisk = getFloodRiskScore(property.lat, property.lng);
  const transport = getTransportProximityScore(property.lat, property.lng);
  const crime = getCrimeRateScore(property.lat, property.lng, property.suburb);
  const school = getSchoolCatchmentScore(property.address);
  const lifestyle = getLifestyleScore(property.lat, property.lng);
  const daActivity = getDAActivityScore(property.lat, property.lng);
  const nbn = getNBNScore(property.address); // Optionally used in UI but not total yet

  const total = floodRisk + transport + crime + school + lifestyle + daActivity;

  return {
    totalScore: total,
    breakdown: {
      floodRisk,
      transportProximity: transport,
      crimeRate: crime,
      schoolCatchment: school,
      lifestyle,
      daActivity,
    }
  };
}
