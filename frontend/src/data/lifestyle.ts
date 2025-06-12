// Stub function – returns a lifestyle score from 0 (isolated) to 20 (vibrant)
export function getLifestyleScore(lat: number, lng: number): number {
  // Simulate: properties closer to CBD areas have higher scores
  const isInLifestyleHub = lat < -27.47 && lng > 153.0;
  return isInLifestyleHub ? 17 : 11;
}
