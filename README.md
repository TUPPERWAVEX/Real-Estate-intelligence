# Real-Estate-intelligence
Real Estate Intelligence Application
# GeoIntel Platform

**Private OSINT-powered real estate intelligence tool**  
This platform gives properties a score out of 100 based on publicly available data, helping developers, home buyers, and renters make smarter decisions.

---

## Project Goal

Create an OpenStreetMap-style interactive application that evaluates any property based on:
- Proximity to transport
- Flood risk zones
- Crime rates
- Future council plans
- Zoning overlays
- DA application activity
- NBN availability
- School catchments
- Lifestyle indicators

All data is scraped or sourced from **publicly available open datasets** using OSINT techniques.

---

## Tech Stack

| Layer       | Tech                      |
|-------------|---------------------------|
| Frontend    | React + Tailwind + Leaflet or MapLibre |
| Backend     | FastAPI or Flask (Python) |
| Data Store  | GeoJSON (MVP), PostGIS (Phase 2+) |
| Scraping    | BeautifulSoup, requests, Overpass API |
| Deployment  | Docker / Localhost / VPS |

---

## Project Structure

```plaintext
geo-intel-platform/
├── backend/              # Python API for scoring, lookups
├── frontend/             # React map interface
├── data/
│   ├── raw/              # Unprocessed scraped data
│   └── processed/        # Cleaned GeoJSON, CSVs
├── scoring/
│   ├── config.yaml       # Scoring weights and rules
│   └── engine.py         # Core scoring algorithm
├── docker/
│   └── docker-compose.yml
├── docs/                 # Planning, datasets, architecture
├── README.md
└── .gitignore
