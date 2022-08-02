import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
