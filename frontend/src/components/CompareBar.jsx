const CompareBar = ({ selected, onClear, onCompare }) => {
  if (selected.length < 2) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#222',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div>
        Comparing: {selected.map(p => p.address).join(" vs ")}
      </div>
      <div>
        <button onClick={onClear} style={{ marginRight: "1rem" }}>Clear</button>
        <button onClick={onCompare}>Compare</button>
      </div>
    </div>
  );
};

export default CompareBar;
