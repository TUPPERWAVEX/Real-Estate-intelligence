const ScoreBreakdownCard = ({ breakdown }) => {
  return (
    <div style={{
      fontSize: "0.85rem",
      background: "#fff",
      border: "1px solid #ddd",
      padding: "0.75rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <strong>Score Breakdown:</strong>
      <ul style={{ paddingLeft: 16, marginTop: "0.5rem" }}>
        <li>Flood Risk: {breakdown.floodRisk} / 20</li>
        <li>Transport: {breakdown.transportProximity} / 20</li>
        <li>Crime Rate: {breakdown.crimeRate} / 20</li>
        <li>School Catchment: {breakdown.schoolCatchment} / 20</li>
        <li>Lifestyle: {breakdown.lifestyle} / 20</li>
        <li>DA Activity: {breakdown.daActivity} / 20</li>
      </ul>
    </div>
  );
};

export default ScoreBreakdownCard;
