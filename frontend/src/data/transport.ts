// Stub function – returns a transport proximity score from 0 (far) to 20 (very close)
export function getTransportProximityScore(lat: number, lng: number): number {
  // Simulate proximity: central lat/lng is closer to transport
  const isNearTransport = lat < -27.5 && lng > 152.95;
  return isNearTransport ? 18 : 10;
}
