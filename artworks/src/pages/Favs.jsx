import React from "react";
import Page from "../layout/Page";
import SearchBar from "./SearchBar";
import "./Favs.css";

export default function Favs() {
  return (
    <Page>
      <SearchBar />
      <div>Favorites</div>
    </Page>
  );
}
