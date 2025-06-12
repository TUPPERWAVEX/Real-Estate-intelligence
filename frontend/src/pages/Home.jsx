import { useState } from 'react';
import MapView from "../components/MapView";
import Sidebar from "../components/Sidebar";
import { dummyProperties } from "../data/dummyProperties";
import { scoreProperty } from "../utils/scoring";

const Home = () => {
  const [minScore, setMinScore] = useState(0);

  const filteredProperties = dummyProperties.filter((property) => {
    const { totalScore } = scoreProperty(property);
    return totalScore >= minScore;
  });

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar minScore={minScore} setMinScore={setMinScore} />
      <div style={{ flex: 1 }}>
        <MapView properties={filteredProperties} />
      </div>
    </div>
  );
};

export default Home;
