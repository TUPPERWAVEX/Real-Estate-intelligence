export interface Property {
  id: string;
  address: string;
  lat: number;
  lng: number;
  bedrooms: number;
  bathrooms: number;
  price?: number;
  suburb?: string;
  postcode?: string;
}

export interface ScoreBreakdown {
  floodRisk: number;
  transportProximity: number;
  crimeRate: number;
  schoolCatchment: number;
  lifestyle: number;
}
