import React from "react";
import Page from "../layout/Page";
import ArtCard from "./ArtCard";
import SearchBar from "./SearchBar";
import "./Landing.css";

export default function Landing(props) {
  //----------PROPS----------
  const { artworks, value, setValue } = props;

  return (
    <Page>
      <SearchBar value={value} setValue={setValue} />
      <section className="artwork-container">
        {artworks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </section>
    </Page>
  );
}
