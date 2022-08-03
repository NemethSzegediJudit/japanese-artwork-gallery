import React, { useEffect, useState } from "react";
import Page from "../layout/Page";
import ArtCard from "./ArtCard";
import SearchBar from "./SearchBar";
import "./Landing.css";

export default function Landing() {
  //----------useState for fetch----------
  const [artworks, setArtworks] = useState([]);

  //----------useState for search----------
  const [searchField, setSearchField] = useState("");

  //----------fetch try01----------
  async function fetchArtWorks() {
    //Harvard Art Museums API key
    const apikey = "e10c94fc-881a-4828-8c61-0139c224a2f5";

    //fetch URL
    const url = `https://api.harvardartmuseums.org/object?apikey=${apikey}&culture=Japanese&classification=Prints&q=peoplecount:1&hasimage=1&size=100`;

    const response = await fetch(url);

    const responseJson = await response.json();

    //show artworks with image
    setArtworks(
      responseJson.records.filter((artwork) => artwork.primaryimageurl !== null)
    );
  }

  //----------useEffect for fetch----------
  useEffect(() => {
    fetchArtWorks();
  }, []);

  //----------filter artworks----------
  const filteredArtWorks = artworks.filter((artwork) => {
    return artwork.people[0].displayname
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Page>
      <SearchBar setSearchField={setSearchField} />
      <section className="artwork-container">
        {filteredArtWorks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </section>
    </Page>
  );
}
