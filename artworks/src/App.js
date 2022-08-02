import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ArtPage from "./pages/ArtPage";
import Favs from "./pages/Favs";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/artwork/:id" element={<ArtPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
