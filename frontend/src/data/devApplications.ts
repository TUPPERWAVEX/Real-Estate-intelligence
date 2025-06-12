export function getDAActivityScore(lat: number, lng: number): number {
  // Simulated high DA activity near Brisbane CBD
  const nearCBD =
    lat > -27.49 && lat < -27.45 &&
    lng > 153.00 && lng < 153.05;

  return nearCBD ? 17 : 10;
}
