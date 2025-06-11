# 🌐 GeoIntel Platform – Feature Breakdown

This document outlines potential features for different user types and identifies which features are in the MVP scope vs. future expansion.

---

## ✅ MVP Scope (Phase 1)

| Feature | Description |
|--------|-------------|
| 🗺️ OSM Map View | Base layer using OpenStreetMap with property pin overlays |
| 🧭 Address Lookup | Geocode address or click map to evaluate location |
| 🧮 Score out of 100 | Based on OSINT data: transport, flood, crime, zoning, etc. |
| 🧱 Zoning Overlay | Show zoning type for selected property |
| 🌊 Flood Zone Layer | Overlay from QLD FloodCheck data |
| 🚓 Crime Rate (Suburb) | Scraped from QPS or ABS |
| 📡 NBN Availability | FTTP/FTTN/Satellite scraped from NBNCo |
| 🚉 Transport Proximity | GTFS data from Translink for stop distances |
| 🎛️ Score Breakdown Panel | See category-by-category contribution to total score |
| 📁 Configurable Weighting | Use `config.yaml` to adjust default logic |
| 📄 Export PDF Report | Generate property report with score and factors |

---

## 🟨 Phase 2: Enhanced Intelligence & UX

| Feature | Description |
|--------|-------------|
| 🎛️ Live Score Weight Sliders | Let users customize scoring priorities |
| 🗃️ List/Grid/Map View Switcher | Toggle between card, list, or fullscreen map |
| 📍 Proximity Filters | e.g. "Must be within 1km of train station" |
| 📊 DA Activity Timeline | Show surrounding DA approvals as a heatmap or overlay |
| 🏫 School Catchment Overlay | Show boundaries + school quality (MySchool) |
| 🌆 Gentrification Predictor | Cafés, high-yield builds, demographic shifts |
| 📍 Bookmark & Compare | Save multiple properties and compare scores side-by-side |
| 📜 User Mode Presets | Buyer / Renter / Developer profiles with different weights |

---

## 🧍‍♂️ User-Specific Enhancements

### 🟦 Renters
- Internet + mobile signal ratings
- Walkability and shop proximity
- Noise & nightlife proximity risk
- Shared housing density detection

### 🟨 Home Buyers
- School catchment overlay
- Historical flood events, not just zones
- Infrastructure pipeline near property
- Noise and sun orientation

### 🟧 Developers
- Zoning + overlays visualisation
- Parcel shape and area detection
- Estimated yield calculator
- DA approval density + trends
- Multi-lot potential detection

---

## 🔮 Future & Advanced Ideas

| Feature | Description |
|--------|-------------|
| 🛰️ Satellite Terrain Toggle | Switch base map to satellite imagery |
| 🌤️ Sun Path & Orientation | Shadow simulation for lot |
| 🧾 Email or print full property dossier | PDF with property, overlays, score breakdown |
| 🧠 Risk Forecasting Engine | Score how risky this location is over 5–10 years |
| 🗺️ Cleanliness & Council Complaint Map | If available, show areas with low LGA complaint density |
| 📈 Area Trend Radar | Show emerging hotspots based on DA/sales data |

---

## 🔒 Licensing & Data Integrity Notes

All data sourced must comply with public open-data licensing, or be clearly tagged as experimental if scraped from public portals.

