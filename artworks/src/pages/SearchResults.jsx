import React, { useEffect } from "react";
import Page from "../layout/Page";
import ArtCard from "./ArtCard";
import { useParams, Link } from "react-router-dom";

export default function SearchResults(props) {
  //----------PROPS----------
  const { artworks, setValue, searchField, setSearchField } = props;

  const params = useParams();

  useEffect(() => {
    setSearchField(params.value);
  });

  //----------filter artworks----------
  const filteredArtWorks = artworks.filter((artwork) => {
    return artwork.people[0].displayname
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const emptySearchField = () => {
    setValue("");
  };

  return (
    <Page>
      <Link to="/" onClick={emptySearchField}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </Link>
      <h2>Search results for: {params.value}</h2>
      <section className="artwork-container">
        {filteredArtWorks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </section>
    </Page>
  );
}
