const crimeScoresBySuburb: Record<string, number> = {
  "sunnybank hills": 12,
  "toowong": 16,
  "logan central": 6,
  "south brisbane": 14,
  "fortitude valley": 8,
  "brisbane city": 10,
  "indooroopilly": 17,
  "redbank plains": 7,
  "ipswich": 9,
  "carindale": 15,
  "coorparoo": 13,
  "woolloongabba": 11,
  "kedron": 15,
  "wynnum": 14,
  "tingalpa": 13,
  "oxley": 12,
  "moorooka": 11,
  "albion": 9,
  "new farm": 16,
  "chermside": 12
};

export function getCrimeRateScore(lat: number, lng: number, suburb: string = ""): number {
  const key = suburb.trim().toLowerCase();
  return crimeScoresBySuburb[key] ?? 12; // Default median if unknown
}
