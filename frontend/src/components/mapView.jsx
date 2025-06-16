import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';
import properties from '../data/mockProperties';
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
    if (score >= 80) return '4caf50'; // green
    if (score >= 60) return 'ff9800'; // orange
    return 'f44336'; // red
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

        {floodZones.map((zone, i) => (
          <Polygon
            key={i}
            positions={zone.geometry.coordinates[0].map(([lng, lat]) => [lat, lng])}
            pathOptions={{ color: 'red', fillOpacity: 0.4 }}
          />
        ))}

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
