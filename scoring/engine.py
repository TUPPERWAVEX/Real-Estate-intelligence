import yaml

def load_config(path='scoring/config.yaml'):
    with open(path, 'r') as f:
        return yaml.safe_load(f)

def score_property(property_data, config=None):
    if config is None:
        config = load_config()
    weights = config.get("weights", {})

    breakdown = {}
    total_score = 0

    # Transport Proximity
    transport = weights.get("transport_proximity", {})
    if property_data.get("train_distance_km", 99) <= 1:
        breakdown["transport_proximity"] = transport.get("train_within_1km", 0)
    elif property_data.get("train_distance_km", 99) <= 3:
        breakdown["transport_proximity"] = transport.get("train_within_3km", 0)
    elif property_data.get("bus_distance_m", 9999) <= 500:
        breakdown["transport_proximity"] = transport.get("bus_within_500m", 0)
    else:
        breakdown["transport_proximity"] = 0

    # Flood Risk
    flood = weights.get("flood_risk", {})
    flood_level = property_data.get("flood_risk", "no_flood_zone")
    breakdown["flood_risk"] = flood.get(flood_level, 0)

    # Crime Rate
    crime = weights.get("crime_rate", {})
    crime_level = property_data.get("crime_rate", "moderate")
    breakdown["crime_rate"] = crime.get(crime_level, 0)

    # Zoning
    zoning = weights.get("zoning", {})
    zoning_type = property_data.get("zoning", "residential_low_density")
    breakdown["zoning"] = zoning.get(zoning_type, 0)

    # DA Activity
    da = weights.get("da_activity", {})
    da_level = property_data.get("da_activity", "no_recent_applications")
    breakdown["da_activity"] = da.get(da_level, 0)

    # School Catchment
    school = weights.get("school_catchment", {})
    school_type = property_data.get("school_catchment", "average_school")
    breakdown["school_catchment"] = school.get(school_type, 0)

    # Broadband
    broadband = weights.get("broadband", {})
    connection = property_data.get("broadband", "satellite_or_none")
    breakdown["broadband"] = broadband.get(connection, 0)

    # Mobile Coverage
    mobile = weights.get("mobile_coverage", {})
    coverage = property_data.get("mobile_coverage", "good")
    breakdown["mobile_coverage"] = mobile.get(coverage, 0)

    # Lifestyle
    lifestyle = weights.get("lifestyle", {})
    lifestyle_score = 0
    if property_data.get("park_within_500m", False):
        lifestyle_score += lifestyle.get("park_within_500m", 0)
    if property_data.get("shops_within_1km", False):
        lifestyle_score += lifestyle.get("shops_within_1km", 0)
    if property_data.get("noise_pollution", False):
        lifestyle_score += lifestyle.get("noise_pollution", 0)
    breakdown["lifestyle"] = lifestyle_score

    # Final Score
    total_score = sum(breakdown.values())
    return total_score, breakdown

if __name__ == "__main__":
    sample_property = {
        "train_distance_km": 0.9,
        "bus_distance_m": 400,
        "flood_risk": "medium",
        "crime_rate": "high",
        "zoning": "residential_high_density",
        "da_activity": "moderate_density",
        "school_catchment": "top_rated_school",
        "broadband": "fttp",
        "mobile_coverage": "excellent",
        "park_within_500m": True,
        "shops_within_1km": True,
        "noise_pollution": False
    }

    score, breakdown = score_property(sample_property)
    print(f"🏡 Property Score: {score}/100")
    print("📊 Breakdown:")
    for category, value in breakdown.items():
        print(f" - {category}: {value}")
