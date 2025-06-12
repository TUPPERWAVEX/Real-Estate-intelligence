const crimeScoresBySuburb = {
  "sunnybank hills": 12,
  "toowong": 16,
  "logan central": 6,
  "south brisbane": 14,
  "fortitude valley": 8,
  "brisbane city": 10
};

export function getCrimeRateScore(lat: number, lng: number, suburb: string = ""): number {
  const key = suburb.trim().toLowerCase();
  return crimeScoresBySuburb[key] ?? 12; // Default if unknown
}
