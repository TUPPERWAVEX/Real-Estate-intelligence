# 📚 Public Data Sources for GeoIntel Platform

This document outlines all publicly available and OSINT-based data sources used in this project.

---

## 🚌 Transport (Train, Bus, Ferry)

- **Source**: [Translink GTFS](https://translink.com.au/about-translink/open-data)
- **Type**: GTFS ZIP (static transit data)
- **Usage**: Extract stop locations and calculate proximity scores
- **Update Strategy**: Manual download or schedule from Translink’s data feed

---

## 🌊 Flood Risk (QLD)

- **Source**: [Queensland FloodCheck / QSpatial](https://qldglobe.information.qld.gov.au/)
- **Type**: Shapefiles / GeoJSON (flood overlays)
- **Usage**: Identify flood zone type for given coordinates
- **Update Strategy**: Manual export from QLD Globe; consider parsing shapefiles locally

---

## 🚓 Crime Statistics

- **Source**: [Queensland Police Service](https://www.police.qld.gov.au/maps-and-statistics) or [ABS Crime by LGA](https://www.abs.gov.au/statistics/people/crime-and-justice)
- **Type**: CSV/HTML tables
- **Usage**: Assign crime index rating per suburb or LGA
- **Update Strategy**: Web scraping or manual parsing

---

## 🏗️ Development Applications / Zoning

- **Source**: [Brisbane PD Online](https://developmenti.brisbane.qld.gov.au/)
- **Type**: HTML/Scraped DA applications + zoning maps
- **Usage**: Determine DA density, future zoning changes
- **Update Strategy**: Scrape listings or shapefile overlays

---

## 🏫 School Catchments

- **Source**: [EdMap (QLD Education)](https://www.qgso.qld.gov.au/maps/edmap/)
- **Type**: Webmap / shapefiles
- **Usage**: Determine catchment rating for property
- **Update Strategy**: Manual overlay reference or polygon lookups

---

## 📶 Broadband (NBN)

- **Source**: [NBN Rollout Map](https://www.nbnco.com.au/residential/service-check)
- **Type**: Visual map / scrape
- **Usage**: Determine if FTTP / FTTN / Satellite applies
- **Update Strategy**: Screen scrape or bulk lookup

---

## 📡 Mobile Coverage

- **Source**: [Telstra](https://www.telstra.com.au/coverage-networks/our-coverage), [Optus](https://www.optus.com.au/coverage), [Vodafone](https://www.vodafone.com.au/network/coverage-checker)
- **Type**: Visual coverage maps
- **Usage**: Rough mobile reception rating
- **Update Strategy**: Manual mapping / pixel analysis or semi-scraped

---

## 🌳 Lifestyle Indicators

- **Source**: [OpenStreetMap / Overpass API](https://overpass-turbo.eu/)
- **Type**: Query POIs (parks, shops, cafes)
- **Usage**: Proximity-based lifestyle score
- **Update Strategy**: Overpass queries run locally

---

## 🧭 Address Geocoding

- **Source**: [Nominatim (OSM)](https://nominatim.org/)
- **Type**: REST API
- **Usage**: Convert user addresses to lat/lon for spatial lookup
- **Rate Limit**: 1 request per second for free tier

---

## 🧱 Additional Ideas (Later Phases)

- Noise maps (TMR or flight path overlays)
- Bushfire overlays
- Satellite imagery for terrain analysis
- Heat stress / urban canopy maps (LGA level)

---
