import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ScoreBreakdownCard from './ScoreBreakdownCard';
import HeatmapLayer from './HeatmapLayer';
import L from 'leaflet';

function getMarkerColor(score) {
  if (score >= 80) return 'green';
  if (score >= 50) return 'orange';
  return 'red';
}

function createColoredIcon(color) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
}

const MapView = ({ properties, center, showHeatmap, showPopups, onSelect }) => {
  return (
    <MapContainer center={center} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {showHeatmap && (
        <HeatmapLayer points={properties.map(p => [p.lat, p.lng, 0.8])} />
      )}

      {properties.map((property) => {
        return (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={createColoredIcon(getMarkerColor(property.totalScore))}
            eventHandlers={{
              click: () => onSelect(property)
            }}
          >
            {showPopups && (
              <Popup>
                <div>
                  <strong>{property.address}</strong><br />
                  🛏 {property.bedrooms} | 🛁 {property.bathrooms}<br />
                  <strong>Score: {property.totalScore}/120</strong>
                  <ScoreBreakdownCard breakdown={property.breakdown} />
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
