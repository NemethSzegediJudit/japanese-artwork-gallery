import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ArtPage from "./pages/ArtPage";
import Favs from "./pages/Favs";
import "./App.css";
import "./reset.css";

/* const [isFavorite, setIsFavorite] = useState(false); */

/* //----------filter artworks----------
const filteredArtWorks = artworks.filter((artwork) => {
  return artwork.people[0].displayname
    .toLowerCase()
    .includes(searchField.toLowerCase());
}); */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/artwork/:id"
          element={<ArtPage /* isFavorite={isFavorite} */ />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
