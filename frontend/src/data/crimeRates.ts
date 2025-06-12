// Stub function – returns a crime score from 0 (worst) to 20 (best)
export function getCrimeRateScore(lat: number, lng: number): number {
  // Simulate areas with low and high crime
  const isHighCrimeArea = lat < -27.6 && lng > 153.0;
  return isHighCrimeArea ? 6 : 16;
}
