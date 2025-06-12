import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      onSearch([parseFloat(lat), parseFloat(lon)]);
    } else {
      alert("Location not found");
    }
  };

  return (
    <div style={{ padding: "1rem", background: "#e2e2e2" }}>
      <input
        type="text"
        value={query}
        placeholder="Enter suburb or postcode"
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "70%" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Search</button>
    </div>
  );
};

export default SearchBar;
