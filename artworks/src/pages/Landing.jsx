import React, { useEffect, useState } from "react";
import Page from "../layout/Page";
import ArtCard from "./ArtCard";
import SearchBar from "./SearchBar";
import "./Landing.css";

export default function Landing() {
  //----------useState for fetch----------
  const [artworks, setArtworks] = useState([]);

  //----------fetch try01----------
  async function fetchArtWorks() {
    //Harvard Art Museums API key
    const apikey = "e10c94fc-881a-4828-8c61-0139c224a2f5";

    //fetch URL
    const url = `https://api.harvardartmuseums.org/object?apikey=${apikey}&culture=Japanese&classification=Prints&q=peoplecount:1&hasimage=1&size=100`;

    /* 'https://api.harvardartmuseums.org/object?apikey=${apikey}&classification=Prints&culture=Japanese&size=100' */
    /* `https://api.harvardartmuseums.org/object?apikey=${apikey}&person=29481&size=100` */

    const response = await fetch(url);

    const responseJson = await response.json();

    setArtworks(
      responseJson.records.filter((artwork) => artwork.primaryimageurl !== null)
    );
  }

  //----------useEffect for fetch----------
  useEffect(() => {
    fetchArtWorks();
  }, []);

  return (
    <Page>
      <SearchBar />
      <section className="artwork-container">
        {/* a lenti mapelés csak akkor történjen meg, ha az inputunk state-je üres string */}
        {artworks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
        {/* itt is lesz egy mapelés, a kondíció: ha az inputunk state-je nem üres string */}
      </section>
    </Page>
  );
}
