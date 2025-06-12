export function getDAActivityScore(lat: number, lng: number): number {
  // Simulated logic:
  // Properties near (-27.47, 153.02) have more DAs
  const nearCBD =
    lat > -27.49 && lat < -27.45 &&
    lng > 153.00 && lng < 153.05;

  return nearCBD ? 17 : 10;
}
