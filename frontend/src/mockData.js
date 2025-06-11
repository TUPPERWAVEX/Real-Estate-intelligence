// Dummy properties used for local scoring tests and UI rendering

export const mockProperties = [
  {
    id: 1,
    address: "224 Ida Brisbane Road",
    coords: [-27.486, 153.018],
    train_distance_km: 0.9,
    bus_distance_m: 300,
    flood_risk: "medium",
    crime_rate: "moderate",
    zoning: "residential_low_density",
    da_activity: "moderate_density",
    school_catchment: "top_rated_school",
    broadband: "fttp",
    mobile_coverage: "excellent",
    park_within_500m: true,
    shops_within_1km: true,
    noise_pollution: false
  },
  {
    id: 2,
    address: "58 Riverdale Street",
    coords: [-27.4715, 153.0204],
    train_distance_km: 2.4,
    bus_distance_m: 600,
    flood_risk: "low",
    crime_rate: "low",
    zoning: "residential_high_density",
    da_activity: "high_density",
    school_catchment: "average_school",
    broadband: "fttn",
    mobile_coverage: "good",
    park_within_500m: false,
    shops_within_1km: true,
    noise_pollution: true
  },
  {
    id: 3,
    address: "12 Poinsettia Crescent",
    coords: [-27.4532, 153.0301],
    train_distance_km: 4.1,
    bus_distance_m: 1000,
    flood_risk: "no_flood_zone",
    crime_rate: "high",
    zoning: "industrial_zone_nearby",
    da_activity: "no_recent_applications",
    school_catchment: "no_catchment",
    broadband: "satellite_or_none",
    mobile_coverage: "poor",
    park_within_500m: false,
    shops_within_1km: false,
    noise_pollution: true
  }
]
