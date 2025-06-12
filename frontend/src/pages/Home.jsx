import { useState, useEffect } from 'react';
import MapView from "../components/MapView";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import PropertyDetailPanel from "../components/PropertyDetailPanel";
import { dummyProperties } from "../data/dummyProperties";
import { scoreProperty } from "../utils/scoring";

const Home = () => {
  const [filters, setFilters] = useState({
    minScore: 0,
    minBedrooms: 0,
    maxPrice: Infinity,
    includeFlood: true,
    includeCrime: true,
    showHeatmap: true,
    showPopups: true,
    savedOnly: false
  });

  const [mapCenter, setMapCenter] = useState([-27.47, 153.02]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [savedIds, setSavedIds] = useState(() => {
    const saved = localStorage.getItem('savedProperties');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSave = (id) => {
    const updated = savedIds.includes(id)
      ? savedIds.filter(pid => pid !== id)
      : [...savedIds, id];

    setSavedIds(updated);
    localStorage.setItem('savedProperties', JSON.stringify(updated));
  };

  const filtered = dummyProperties.map((property) => {
    const { totalScore, breakdown } = scoreProperty(property);
    return { ...property, totalScore, breakdown };
  }).filter((property) => {
    if (filters.savedOnly && !savedIds.includes(property.id)) return false;
    if (property.bedrooms < filters.minBedrooms) return false;
    if (property.price && property.price > filters.maxPrice) return false;

    let adjustedScore = 0;
    if (filters.includeFlood) adjustedScore += property.breakdown.floodRisk;
    if (filters.includeCrime) adjustedScore += property.breakdown.crimeRate;
    adjustedScore += property.breakdown.transportProximity +
                     property.breakdown.schoolCatchment +
                     property.breakdown.lifestyle +
                     property.breakdown.daActivity;

    return adjustedScore >= filters.minScore;
  });

  return (
    <>
      <SearchBar onSearch={setMapCenter} />
      <div style={{ display: 'flex' }}>
        <Sidebar filters={filters} setFilters={setFilters} />
        <div style={{ flex: 1 }}>
          <MapView
            properties={filtered}
            center={mapCenter}
            showHeatmap={filters.showHeatmap}
            showPopups={filters.showPopups}
            onSelect={setSelectedProperty}
            savedIds={savedIds}
            onToggleSave={toggleSave}
          />
        </div>
      </div>
      <PropertyDetailPanel
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isSaved={selectedProperty && savedIds.includes(selectedProperty.id)}
        onToggleSave={toggleSave}
      />
    </>
  );
};

export default Home;
