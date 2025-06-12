// Dummy bounding box: Brisbane River area (approximate)
const floodBox = {
  minLat: -27.495,
  maxLat: -27.450,
  minLng: 152.98,
  maxLng: 153.05
};

export function getFloodRiskScore(lat: number, lng: number): number {
  const isFloodProne =
    lat >= floodBox.minLat &&
    lat <= floodBox.maxLat &&
    lng >= floodBox.minLng &&
    lng <= floodBox.maxLng;

  return isFloodProne ? 5 : 15;
}
