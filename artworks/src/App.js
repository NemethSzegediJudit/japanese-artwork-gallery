import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ArtPage from "./pages/ArtPage";
import Favs from "./pages/Favs";
import "./App.css";
import "./reset.css";

function App() {
  //----------useState for fetch----------
  const [artworks, setArtworks] = useState([]);

  //----------useState for favorite function----------
  /* const [isFavorite, setIsFavorite] = useState(false); */

  /*   function toggleFavorite() {
    if (isFavorite === true) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  } */

  //----------fetch artworks----------
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing artworks={artworks} />} />
        <Route
          path="/search/:value"
          element={<Landing artworks={artworks} />}
        />
        <Route
          path="/artwork/:id"
          element={
            <ArtPage
              artworks={
                artworks
              } /* isFavorite={isFavorite} toggleFavorite={toggleFavorite}*/
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
