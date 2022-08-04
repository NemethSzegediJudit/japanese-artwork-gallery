import React, { useState, useEffect, useCallback } from "react";
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

  const [favoriteArtworkIds, setFavoriteArtworkIds] = useState([]);

  //----------useState for signIn----------
  const [user, setUser] = useState({});

  /*   const favoriteArtworks = favoriteArtworkIds.map((id) =>
    artworks.find((artwork) => artwork.id === id)
  ); */

  const favoriteArtworks = artworks.filter((artwork) =>
    favoriteArtworkIds.includes(artwork.id)
  );

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

  //----------fetch favorites from backend----------
  //userId
  const userId = user.sub;

  const fetchFavorites = useCallback(async () => {
    if (userId) {
      const response = await fetch(`http://127.0.0.1:5000/favorites/${userId}`);
      const responseJson = await response.json();

      setFavoriteArtworkIds(responseJson);
    } else {
      setFavoriteArtworkIds([]);
    }
  }, [userId]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

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
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/favorites"
          element={<Favs favoriteArtworks={favoriteArtworks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
