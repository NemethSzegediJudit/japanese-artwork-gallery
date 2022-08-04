import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "../layout/Page";
import SearchBar from "./SearchBar";

import "./Favs.css";

export default function Favs() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <Page>
      <SearchBar />
      <Link to="/">
        <i className="fa-solid fa-arrow-left-long"></i>
      </Link>
      <div className="loginWrapper">
        <button className="loginInFavs" onClick={handleClick}>
          Please log in
        </button>
      </div>
    </Page>
  );
}
