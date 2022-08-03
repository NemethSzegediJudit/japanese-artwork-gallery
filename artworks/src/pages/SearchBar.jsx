import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  /* ---filter minta ---
    setArtworks(
      responseJson.records.filter((artwork) => artwork.primaryimageurl !== null)
    );
  */

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => e.currentTarget.value}
      />
      <i className="fa-solid fa-magnifying-glass" /* onClick= */></i>
    </div>
  );
}
