import floodData from './floodZones.geo.json';

interface BBox {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

// Simulated bounding boxes from flood polygons
const floodBoxes: BBox[] = [];

if (floodData && floodData.features) {
  floodData.features.forEach(feature => {
    const coords = feature.geometry.coordinates[0]; // assumes Polygon type
    const lats = coords.map(([lng, lat]) => lat);
    const lngs = coords.map(([lng, lat]) => lng);
    floodBoxes.push({
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs)
    });
  });
}

export function getFloodRiskScore(lat: number, lng: number): number {
  const isFloodProne = floodBoxes.some(box =>
    lat >= box.minLat &&
    lat <= box.maxLat &&
    lng >= box.minLng &&
    lng <= box.maxLng
  );
  return isFloodProne ? 5 : 15;
}
