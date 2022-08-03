import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar(props) {
  //----------PROPS----------
  const { value, setValue } = props;

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Link to={"/search/" + value}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Link>
    </div>
  );
}
