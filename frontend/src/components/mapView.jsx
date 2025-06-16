import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';
import HeatmapLayer from 'react-leaflet-heatmap-layer-v3';

import properties from '../data/mockProperties';
import heatPoints from '../data/mockHeatData';
import { loadFloodZones } from '../utils/loadFloodZones';
import ScoreCard from './ScoreCard';
import FilterPanel from './FilterPanel';

const MapView = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [floodZones, setFloodZones] = useState([]);
  const [filters, setFilters] = useState({
    beds: 0,
    baths: 0,
    score: 0,
    suburb: ''
  });

  useEffect(() => {
    setFloodZones(loadFloodZones());
  }, []);

  const checkFloodRisk = (lat, lng) => {
    const point = turf.point([lng, lat]);
    for (const zone of floodZones) {
      if (turf.booleanPointInPolygon(point, zone)) return true;
    }
    return false;
  };

  const getMarkerColor = (score) => {
    if (score >= 80) return '4caf50';
    if (score >= 60) return 'ff9800';
    return 'f44336';
  };

  const iconCache = {};
  const getColoredIcon = (hexColor) => {
    if (!iconCache[hexColor]) {
      iconCache[hexColor] = new L.Icon({
        iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${hexColor}`,
        iconSize: [21, 34],
        iconAnchor: [10, 34],
        popupAnchor: [0, -30]
      });
    }
    return iconCache[hexColor];
  };

  return (
    <>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <MapContainer center={[-27.4705, 153.0260]} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🔥 Heatmap Layer */}
        <HeatmapLayer
          points={heatPoints}
          longitudeExtractor={p => p[1]}
          latitudeExtractor={p => p[0]}
          intensityExtractor={p => p[2]}
          radius={20}
          blur={15}
          max={1}
        />

        {/* 🟥 Flood Zones */}
        {floodZones.map((zone, i) => (
          <Polygon
            key={i}
            positions={zone.geometry.coordinates[0].map(([lng, lat]) => [lat, lng])}
            pathOptions={{ color: 'red', fillOpacity: 0.4 }}
          />
        ))}

        {/* 📍 Property Markers */}
        {properties
          .filter(p =>
            p.beds >= filters.beds &&
            p.baths >= filters.baths &&
            p.score >= filters.score &&
            p.address.toLowerCase().includes(filters.suburb.toLowerCase())
          )
          .map((property) => {
            const floodRisk = checkFloodRisk(property.lat, property.lng);
            const adjustedProperty = {
              ...property,
              breakdown: {
                ...property.breakdown,
                flood: floodRisk ? 1 : 10,
              }
            };
            return (
              <Marker
                key={property.id}
                position={[property.lat, property.lng]}
                icon={getColoredIcon(getMarkerColor(adjustedProperty.score))}
                eventHandlers={{
                  click: () => setSelectedProperty(adjustedProperty)
                }}
              >
                <Popup>
                  <ScoreCard property={selectedProperty} />
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
};

export default MapView;
