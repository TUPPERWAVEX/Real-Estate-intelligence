// Simulated list of public transport stops (lat/lng)
const transportStops = [
  { lat: -27.468, lng: 153.023 }, // Brisbane CBD
  { lat: -27.496, lng: 153.013 }, // South Bank
  { lat: -27.572, lng: 153.083 }, // Sunnybank Station
  { lat: -27.484, lng: 152.994 }, // Toowong Station
];

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
}

export function getTransportProximityScore(lat: number, lng: number): number {
  const distances = transportStops.map((stop) =>
    haversineDistance(lat, lng, stop.lat, stop.lng)
  );
  const minDistance = Math.min(...distances);

  // Score out of 20: full score if within 0.5 km, scale down after
  if (minDistance <= 0.5) return 20;
  if (minDistance <= 1) return 17;
  if (minDistance <= 2) return 13;
  if (minDistance <= 5) return 9;
  if (minDistance <= 10) return 5;
  return 2;
}
