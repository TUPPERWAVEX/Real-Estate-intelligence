// Stub function – returns a fake flood risk score from 0 (no risk) to 20 (high risk)
export function getFloodRiskScore(lat: number, lng: number): number {
  // Simulate: lower scores for higher elevations, etc.
  const isFloodProne = lat < -27.5 && lng > 152.9;
  return isFloodProne ? 5 : 15;
}
