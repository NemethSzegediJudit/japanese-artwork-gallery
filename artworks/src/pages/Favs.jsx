import React from "react";
import { Link } from "react-router-dom";
import Page from "../layout/Page";
import SearchBar from "./SearchBar";

import "./Favs.css";

export default function Favs() {
  return (
    <Page>
      <SearchBar />
      <Link to="/">
        <i className="fa-solid fa-arrow-left-long"></i>
      </Link>
      <div>Favorites</div>
    </Page>
  );
}
