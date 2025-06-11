# 🛣️ GeoIntel Platform – Development Roadmap

This roadmap outlines the planned phases for feature development, MVP delivery, and long-term enhancements for the GeoIntel platform.

---

## 🟢 Phase 1 – MVP: Local Functioning Prototype (Weeks 1–6)

🎯 Goal: Prove core concept and data pipeline. SE QLD only.

| Feature | Priority | Dependencies |
|--------|----------|--------------|
| OpenStreetMap base map (React Leaflet) | High | Frontend scaffold |
| Address lookup (Nominatim) | High | Nominatim API |
| `config.yaml` scoring system | High | `scoring/engine.py` |
| Flood zone layer (QLD shapefile → GeoJSON) | High | Data scraper |
| Crime index by suburb (QPS/ABS) | High | Web scraping |
| Transport proximity (GTFS) | High | GTFS parser |
| Score display with breakdown | High | Backend integration |
| Zoning overlay (from LGA PD Online or QLD Globe) | Medium | Scraper/overlay |
| UI: Score + filter sidebar | Medium | Tailwind/React component |
| Export PDF report | Low | HTML-to-PDF or external lib |

---

## 🟡 Phase 2 – User Intelligence Layer (Weeks 7–12)

🎯 Goal: Add UX flexibility and user-specific scoring

| Feature | Priority | Dependencies |
|--------|----------|--------------|
| Score weighting sliders (frontend) | High | React state logic |
| View switcher (Map / List / Card) | High | UI component logic |
| DA activity visualisation | High | LGA web scraper |
| School catchment overlay + MySchool rating | Medium | EdMap + MySchool integration |
| Lifestyle POI filters (parks, shops, etc) | Medium | Overpass queries |
| Preset modes (buyer, renter, developer) | Medium | Extend YAML logic |
| Mobile coverage indicator | Low | Manual data or scraped maps |
| Internet speed/type | Low | NBN scraper |

---

## 🟧 Phase 3 – National Support + Scaling (Weeks 13–18)

🎯 Goal: Expand coverage beyond QLD with modular data ingestion

| Feature | Priority | Dependencies |
|--------|----------|--------------|
| Zoning & flood data for NSW/VIC/WA | High | State datasets |
| Modular scraper system | High | Reusable data ingestors |
| Switch from flat files to PostGIS | Medium | Docker/PostGIS |
| API rate limiting + caching | Medium | FastAPI or Flask setup |
| Address error handling | Medium | Fuzzy match logic |

---

## 🔮 Phase 4 – Premium Features & Launch Prep (Weeks 19+)

🎯 Goal: Launch, polish, and explore monetisation or API licensing

| Feature | Priority | Dependencies |
|--------|----------|--------------|
| PDF scorecard generator | High | Report templating |
| Bookmark & compare tool | Medium | LocalStorage or DB |
| Gentrification radar | Medium | DA + café + income trend signals |
| Parcel yield estimator | Medium | Zoning + shape logic |
| User login (optional) | Low | Auth module |
| Landing page + blog | Low | Vite/Next.js or static page |

---

## ✅ Milestones Overview

| Milestone | Target Week | Outcome |
|-----------|-------------|---------|
| **MVP Ready** | Week 6 | Working scoring map with QLD data |
| **Phase 2 UI/UX Live** | Week 12 | User-friendly, score-weighted explorer |
| **National Expansion** | Week 18 | All AUS states supported |
| **Beta Launch** | Week 20+ | Public/tester access & marketing

---

## 📌 Notes

- This roadmap assumes solo development; adjust timeline for collaborators.
- All data must remain compliant with OSINT/open data licensing.
- This roadmap is updated as features evolve or priorities shift.

