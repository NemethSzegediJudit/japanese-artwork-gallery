import React from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../layout/Page";
import "./ArtPage.css";

export default function ArtPage(props) {
  const params = useParams();

  const { artworks /* isFavorite */ } = props;

  //----------filter artworks----------
  const filteredArtWork = artworks.filter((artwork) => {
    return artwork.id.toString().includes(params.id.toString());
  });

  return (
    <Page>
      <div className="icons">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
        <i className="fa-regular fa-heart"></i>
        {/* <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> */}
      </div>
      <div className="artwork-details container">
        <section className="img-section">
          <img src={filteredArtWork[0].primaryimageurl} alt="artwork" />
        </section>
        <section className="details-section">
          <h2>{filteredArtWork[0].title}</h2>
          {/* <h3>{filteredArtWork.people[0].displayname}</h3> */}
          <h3>{filteredArtWork[0].period}</h3>
          <h3>{filteredArtWork[0].medium}</h3>
          <h3>{filteredArtWork[0].dimensions}</h3>
        </section>
      </div>
    </Page>
  );
}
