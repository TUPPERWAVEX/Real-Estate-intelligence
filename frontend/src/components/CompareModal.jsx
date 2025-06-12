const CompareModal = ({ properties, onClose }) => {
  if (!properties || properties.length < 2) return null;

  const factors = [
    { key: "floodRisk", label: "Flood Risk" },
    { key: "transportProximity", label: "Transport Proximity" },
    { key: "crimeRate", label: "Crime Rate" },
    { key: "schoolCatchment", label: "School Catchment" },
    { key: "lifestyle", label: "Lifestyle" },
    { key: "daActivity", label: "DA Activity" }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '90%',
        overflowX: 'auto'
      }}>
        <button onClick={onClose} style={{ float: 'right' }}>✕</button>
        <h3>Compare Properties</h3>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Factor</th>
              {properties.map(p => (
                <th key={p.id}>{p.address}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {factors.map(({ key, label }) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {properties.map(p => (
                  <td key={p.id} style={{ textAlign: "center" }}>{p.breakdown[key]}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td><strong>Total Score</strong></td>
              {properties.map(p => (
                <td key={p.id} style={{ textAlign: "center" }}>{p.totalScore}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareModal;
