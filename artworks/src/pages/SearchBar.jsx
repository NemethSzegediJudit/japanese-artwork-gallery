import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  //----------PROPS----------
  const { setSearchField } = props;

  //----------useState for input value----------
  const [value, setValue] = useState("");

  //----------click event handler----------
  const searchClick = () => {
    setSearchField(value);
    setValue("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchClick();
          }
        }}
      />
      <i className="fa-solid fa-magnifying-glass" onClick={searchClick}></i>
    </div>
  );
}
