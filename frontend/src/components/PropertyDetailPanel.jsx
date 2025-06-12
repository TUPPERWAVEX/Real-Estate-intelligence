const PropertyDetailPanel = ({ property, onClose, isSaved, onToggleSave }) => {
  if (!property) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '320px',
      backgroundColor: '#fff',
      borderLeft: '1px solid #ccc',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
      padding: '1rem',
      overflowY: 'auto',
      zIndex: 999
    }}>
      <button onClick={onClose} style={{ float: 'right' }}>✕</button>
      <h3>{property.address}</h3>
      <p>🛏 {property.bedrooms} | 🛁 {property.bathrooms}</p>
      <p><strong>Total Score:</strong> {property.totalScore}/120</p>

      <ul style={{ paddingLeft: 16 }}>
        <li>Flood Risk: {property.breakdown.floodRisk}</li>
        <li>Transport: {property.breakdown.transportProximity}</li>
        <li>Crime Rate: {property.breakdown.crimeRate}</li>
        <li>School Catchment: {property.breakdown.schoolCatchment}</li>
        <li>Lifestyle: {property.breakdown.lifestyle}</li>
        <li>DA Activity: {property.breakdown.daActivity}</li>
      </ul>

      <button onClick={() => onToggleSave(property.id)} style={{ marginTop: "1rem" }}>
        {isSaved ? "★ Remove Bookmark" : "☆ Save Property"}
      </button>
    </div>
  );
};

export default PropertyDetailPanel;
