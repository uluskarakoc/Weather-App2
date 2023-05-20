import React, { useState } from "react";

function SearchBar({ onSearchCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchCity(city);
    // yukaridaki props olmali
    // props.setCityName(city)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder=" Stadt eingeben"
      />
      <button type="submit">Suche</button>
    </form>
  );
}

export default SearchBar;
