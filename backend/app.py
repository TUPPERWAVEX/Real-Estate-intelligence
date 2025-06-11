from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from scoring.engine import score_property
import uvicorn

app = FastAPI()

# Allow local frontend calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Lock this down later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PropertyData(BaseModel):
    train_distance_km: float
    bus_distance_m: int
    flood_risk: str
    crime_rate: str
    zoning: str
    da_activity: str
    school_catchment: str
    broadband: str
    mobile_coverage: str
    park_within_500m: bool
    shops_within_1km: bool
    noise_pollution: bool

@app.post("/score")
def score(data: PropertyData):
    data_dict = data.dict()
    total, breakdown = score_property(data_dict)
    return {
        "score": total,
        "breakdown": breakdown
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

