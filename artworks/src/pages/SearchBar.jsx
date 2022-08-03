import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  //----------PROPS----------
  const { setSearchField } = props;

  const [value, setValue] = useState();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchField(e.currentTarget.value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
