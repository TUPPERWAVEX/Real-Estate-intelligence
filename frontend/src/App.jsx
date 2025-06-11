import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { mockProperties } from './mockData'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon path issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export default function App() {
  const [scoredProperties, setScoredProperties] = useState([])

  useEffect(() => {
    async function fetchScores() {
      const results = await Promise.all(
        mockProperties.map(async (property) => {
          const response = await fetch('http://localhost:8000/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(property),
          })
          const data = await response.json()
          return { ...property, score: data.score }
        })
      )
      setScoredProperties(results)
    }

    fetchScores()
  }, [])

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[-27.47, 153.02]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {scoredProperties.map((prop) => (
          <Marker key={prop.id} position={prop.coords}>
            <Popup>
              <strong>{prop.address}</strong>
              <br />
              Score: {prop.score}/100
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
