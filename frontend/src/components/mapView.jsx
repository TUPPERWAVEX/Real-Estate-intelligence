import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { scoreProperty } from '../utils/scoring';

const MapView = ({ properties }) => {
  return (
    <MapContainer center={[-27.47, 153.02]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {properties.map((property) => {
        const { totalScore, breakdown } = scoreProperty(property);
        return (
          <Marker key={property.id} position={[property.lat, property.lng]}>
            <Popup>
              <div>
                <strong>{property.address}</strong><br />
                🛏 {property.bedrooms} | 🛁 {property.bathrooms}<br />
                <strong>Score: {totalScore}/100</strong>
                <ul style={{ paddingLeft: 16 }}>
                  <li>Flood: {breakdown.floodRisk}</li>
                  <li>Transport: {breakdown.transportProximity}</li>
                  <li>Crime: {breakdown.crimeRate}</li>
                  <li>School: {breakdown.schoolCatchment}</li>
                  <li>Lifestyle: {breakdown.lifestyle}</li>
                </ul>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
