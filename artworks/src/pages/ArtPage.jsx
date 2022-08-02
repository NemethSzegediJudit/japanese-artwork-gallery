import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../layout/Page";
import "./ArtPage.css";

export default function ArtPage() {
  const [artwork, setArtwork] = useState([]);
  const params = useParams();

  async function fetchArtWork() {
    //Harvard Art Museums API key
    const apikey = "e10c94fc-881a-4828-8c61-0139c224a2f5";

    //fetch URL
    const url = `https://api.harvardartmuseums.org/object/${params.id}?apikey=${apikey}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    setArtwork(responseJson);
  }

  useEffect(() => {
    fetchArtWork();
  });

  return (
    <Page>
      <button><i className="fa-solid fa-arrow-left-long"></i></button>
      <img src={artwork.primaryimageurl} alt="artwork" />
      <h1>{artwork.title}</h1>
      <h2>{artwork.dated}</h2>
      <h2>{artwork.medium}</h2>
      <h2>{artwork.dimensions}</h2>
    </Page>
  );
}
