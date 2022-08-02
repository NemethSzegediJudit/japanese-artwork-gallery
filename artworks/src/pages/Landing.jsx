import Page from "../layout/Page";
import ArtCard from "./ArtCard"
import SearchBar from "./SearchBar"
import "./Landing.css";

export default function Landing(props) {
  //----------PROPS----------
  const { artworks } = props;

  return (
    <Page>
      <SearchBar />
      {artworks.map((artwork) => (
        <ArtCard
        key={artwork.id}
        artwork={artwork}
        />
      ))}
    </Page>
  );
}