export function getDAActivityScore(lat: number, lng: number): number {
  // Simulated high DA activity near Brisbane CBD and South Brisbane
  const zones = [
    {
      name: "CBD Core",
      bounds: {
        minLat: -27.49,
        maxLat: -27.45,
        minLng: 153.00,
        maxLng: 153.05
      },
      score: 17
    },
    {
      name: "Inner South",
      bounds: {
        minLat: -27.51,
        maxLat: -27.47,
        minLng: 152.99,
        maxLng: 153.04
      },
      score: 15
    }
  ];

  for (const zone of zones) {
    const b = zone.bounds;
    if (lat >= b.minLat && lat <= b.maxLat && lng >= b.minLng && lng <= b.maxLng) {
      return zone.score;
    }
  }

  return 10; // default for low DA zones
}
