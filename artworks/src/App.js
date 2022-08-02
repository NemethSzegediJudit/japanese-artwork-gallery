import React, { useEffect, useState } from "react";
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

  //----------fetch try01----------
  async function fetchData() {
    //Harvard Art Museums API key
    const apikey = "e10c94fc-881a-4828-8c61-0139c224a2f5";

    //fetch URL
    const url = `https://api.harvardartmuseums.org/object?apikey=${apikey}&person=29481&size=100`;

    const response = await fetch(url);

    const responseJson = await response.json();

    setArtworks(responseJson.records);

    console.log(responseJson.records);
  }

  //----------useEffect for fetch----------
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing artworks={artworks} />} />
        <Route path="/artpage" element={<ArtPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
